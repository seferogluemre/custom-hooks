import { useEffect, useState } from "react";

const useFetch = (url: string) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                setData(result)
            } catch (error) {
                setError((error as Error).message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error };




    return <>


        Emre
    </>

}

export default useFetch;