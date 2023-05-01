import Card from "../componentes/Card";
import ItemListContainer from "../componentes/ItemListContainer";
import useProducts from "../hooks/useProducts";

export default function ProductsPage() {
    const { products, isLoading } = useProducts();
    if (isLoading) {
        return (<p>Cargando...</p>)
    }
    return (<>
        <ItemListContainer greeting={"Productos"} />
        <div className="product-card-container">
            {products && products.map(p => (<Card key={p.id} product={p} />))}
        </div>
    </>

    );
}