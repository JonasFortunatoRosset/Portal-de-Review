import "./Orders.css";
import { useParams } from "react-router";
import useOrders from "../hooks/useOrders";

const Orders = ({ API_BASE_URL }) => {
    const { id } = useParams();

    const { orders, wallet, loading } = useOrders(id, API_BASE_URL);

    if (loading) {
        return (
            <div className="orders-loading">
                Carregando pedidos...
            </div>
        );
    }

    return (
        <div className="orders-container">
            <div className="orders-header">
                <div className="orders-wallet">
                    R$ {Number(wallet).toFixed(2)}
                </div>
            </div>

            <div className="orders-content">
                <h2>Minhas compras</h2>

                {orders.length === 0 ? (
                    <div className="orders-empty">
                        Nenhum pedido encontrado.
                    </div>
                ) : (
                    orders.map((order) => (
                        <div
                            className="order-card"
                            key={order.id}
                        >
                            <div className="order-image">
                                imagem produto
                            </div>

                            <div className="order-info">
                                <h3>
                                    {order.produto?.nome || "Produto não encontrado"}
                                </h3>

                                <div className="order-rating">
                                    ⭐ {order.produto?.nota ?? "-"}
                                </div>

                                {/* Renderização condicional */}
                                {order.avaliacao !== null ? (
                                    <span className="badge-success">
                                        Já avaliou
                                    </span>
                                ) : (
                                    <span className="badge-danger">
                                        Avalie e ganhe +5!
                                    </span>
                                )}

                                <div className="user-stars">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={
                                                star <= (order.avaliacao || 0)
                                                    ? "star-filled"
                                                    : "star-empty"
                                            }
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Orders;