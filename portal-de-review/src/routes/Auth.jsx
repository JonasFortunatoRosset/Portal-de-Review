import './Auth.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const Auth = ({API_BASE_URL}) => {

    const [id, setId] = useState('');
    const [submittedId, setSubmittedId] = useState('');

    const { user, message, success } = useAuth(submittedId, API_BASE_URL);

    const navigate = useNavigate();

    useEffect(() => {
        if (success && user){
            navigate(`/orders/${user.id}`, { replace: true });
        }
    }, [success, user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!id) {
            return;
        }
        setSubmittedId(id);
    }

    return(
        <>
            <div id='content-container'>
                <h1>FALKON</h1>
                <div className='login-card'>
                    <h1>Login de Usuário</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>ID:</span>
                            <input className='id' type='text' name='id' value={id || ''} onChange={(e) => setId(e.target.value)} />
                        </label>
                        <input className='btn-submit' type='submit' value='Submit' />
                    </form>
                    {message && <p className={success? 'auth-message': 'failed-message'}>{message}</p>}
                </div>
            </div>
        </>
    )
}

export default Auth;