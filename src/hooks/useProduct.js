import { useEffect, useState } from "react"
const PRODUCTS = [
    {
        id: 1,
        name: "Facturas",
        description:"Unidad",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1586657263857-346c4b712ff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
        id: 2,
        name: "Galletas",
        description:"Gramos",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1598839950984-034f6dc7b495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FsbGV0YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Tartaletas",
        description:"Unidad",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGFydGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Chocolates",
        description:"Unidad",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hvY29sYXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Tortas",
        description:"Unidad",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1514056052883-d017fddd0426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRvcnRhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Panes",
        description:"Unidad",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1633439708933-0c7f5ec0af96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBhbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },

]

const useProducts = (id) => {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const resp = await new Promise((resolve) => {
                    setTimeout(() => resolve(PRODUCTS.find(p => p.id === parseInt(id))), 1000);
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