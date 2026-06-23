import { useEffect, useState } from "react"

const useDetails = (productId, url) => {
    const [details, setDetails] = useState([]); // informacoes do produto especifico

    useEffect(() => {
        if (!url || !productId) return;

        const fetchData = async() => {
            const res = await fetch(url + '/produtos');
            const json = await res.json();

            json && json.find((e) => {
                if(e.id === productId){
                    setDetails(e);
                }
            })
        }
        fetchData();
    }, [productId, url])

        
    console.log(details)
    return { details }
}

export default useDetails