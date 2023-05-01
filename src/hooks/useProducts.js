import { useEffect, useState } from "react"
const PRODUCTS = [
    {
        id: 1,
        name: "Facturas",
        description:"100gr",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1586657263857-346c4b712ff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
        id: 2,
        name: "Galletas",
        description:"250gr",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1598839950984-034f6dc7b495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FsbGV0YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Tartaletas",
        description:"6 unidades",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGFydGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },

]

const useProducts = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();

    useEffect(() => {
        const getProducts = async () => {
            // Simulo un fetch
            try {
                const resp = await new Promise((resolve) => {
                    setTimeout(() => resolve(PRODUCTS), 1000);
                });
                setProducts(resp);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getProducts();

    }, [])

    return { products, isLoading }
}


export default useProducts