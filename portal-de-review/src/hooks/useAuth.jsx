import { useEffect, useState } from "react";

const useAuth = (id, url) => {
    const [level, setLevel] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(url + '/products');
            const json = await res.json();
        }
        fetchData();

    }, [id, url])

    return { level }
}

export default useAuth;