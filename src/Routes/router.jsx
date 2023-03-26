import { createBrowserRouter } from "react-router-dom";
import { Home, Users, NewUser, Products, Product } from "../Pages";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/newuser',
                element: <NewUser/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/products/1',
                element: <Product/>
            }
        ]
    },
])

export { router };