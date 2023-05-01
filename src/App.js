import Header from "./componentes/Header";
import ItemListContainer from "./componentes/ItemListContainer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./componentes/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "category/:id",
        element: <CategoryPage />
      },
    ]
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;