import { useEffect, useState } from "react";

const useOrders = (id, url) => {
    const [orders, setOrders] = useState([]);
    const [wallet, setWallet] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id || !url) return;

        const fetchData = async () => {
            try {
                setLoading(true);

                const [pedidosRes, produtosRes, usuarioRes] =
                    await Promise.all([
                        fetch(`${url}/pedidos?usuarioId=${id}`),
                        fetch(`${url}/produtos`),
                        fetch(`${url}/usuarios/${id}`)
                    ]);

                const pedidos = await pedidosRes.json();
                const produtos = await produtosRes.json();
                const usuario = await usuarioRes.json();

                const pedidosComProdutos = pedidos.map((pedido) => {
                    const produto = produtos.find(
                        (p) => p.id === pedido.produtoId
                    );

                    return {
                        ...pedido,
                        produto
                    };
                });

                setOrders(pedidosComProdutos);
                setWallet(usuario?.carteira_saldo ?? 0);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, url]);

    return {
        orders,
        wallet,
        loading
    };
};

export default useOrders;