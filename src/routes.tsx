import MainPage from "./Pages/MainPage/mainPage";
import Products from "./Pages/Products/products";

const routes = [
    { path: '/', element: <MainPage /> },
    { path: '/Products', element: <Products /> },
]

export default routes;