import { useParams, useLocation } from 'react-router';  
import useDetails from '../hooks/useDetails';
import './DetaisComponent.css';

const DetailsComponent = ({API_BASE_URL}) => {
    const {idPedido} = useParams();

    const location = useLocation();
    const userOrders = location.state?.orders;

    const currentOrder = userOrders?.find((e) => (e.produtoId === idPedido));

    const { details } = useDetails(idPedido, API_BASE_URL);

    return(
        <>
            <div className="details-container">
                <h1>Detalhes</h1>
                {details.length === 0 ? (
                    <div className="details-empty">
                        Nenhum pedido encontrado.
                    </div>
                ) : 
                (
                    <div className='details-and-avaliation'>
                        <h2>Nome do produto: {details.nome}</h2>
                        <span>Descrição:{details.descricao}</span>
                        <span>Preço: R${details.preco}</span>
                        <span>Categoria: {details.categoria}</span>
                        <div className="user-stars">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={
                                                star <= (currentOrder?.avaliacao || 0)
                                                    ? "star-filled"
                                                    : "star-empty"
                                            }
                                        >
                                            ★
                                        </span>
                                    ))}
                        </div>
                        {currentOrder?.avaliacao !== null ? (
                                    <span className="badge-success">
                                        Já avaliou
                                    </span>
                                ) : (
                                    <span className="badge-not-avaliated">
                                        Avalie e ganhe +5!
                                    </span>
                                )}
                        <button type="button" className={currentOrder?.avaliacao ? 'btn-hidden' : 'btn'}>Avaliar</button>
                    </div>
                )}
            </div>
        </>
    )

}

export default DetailsComponent;