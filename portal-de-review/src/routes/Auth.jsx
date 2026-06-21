import { useState } from 'react';

const Auth = (API_BASE_URL) => {

    const [id, setId] = useState();


    const handleSubmit = (id, API_BASE_URL) => {
        //  const { data, permission } = useAuth(id, API_BASE_URL);
    }

    

    console.log(API_BASE_URL, id);


    return(
        <>
            <div id="container">
                <div id="content-container">
                    <h1>FALKON</h1>
                    <div>
                        <h1>Login de Usuário</h1>
                        <form onSubmit={handleSubmit(id, API_BASE_URL)}>
                            <label>
                                <span>ID:</span>
                                <input type='text' name='id' value={id || ''} onChange={(e) => setId(e.target.value)} />
                            </label>
                            <input type='submit' value='Submit' />
                        </form>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Auth;