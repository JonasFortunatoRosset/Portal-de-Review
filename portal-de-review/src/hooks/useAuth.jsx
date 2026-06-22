import { useEffect, useState } from "react";

const useAuth = (id, url) => {

    const [level, setLevel] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        if (!url || !id) return;

        const fetchData = async() => {
            const res = await fetch(url + '/usuarios');
            const json = await res.json();

            setData(json);
        }
        fetchData();
    }, [id, url])

    if (!id) {
    return { usuario: undefined, message: '', sucess: false };
    }

    if (data === undefined) {
        return { user: undefined, message: 'Carregando dados...', success: false };
    }

    const user = data.find((user) => user.id === id);

    if (user === undefined) {
        return { user: undefined, message: 'Usuário não cadastrado', success: false};
    }

    return { user: user, message: 'Usuário autenticado', success: true};
}

export default useAuth;