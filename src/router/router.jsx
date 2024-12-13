import { createBrowserRouter } from "react-router";
import MainLayout from "../Main-Layout/MainLayout";
import Error from "../error/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllJobs from "../pages/AllJobs";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {path:'/alljobs', element:<AllJobs></AllJobs>},
            {path:'/login', element:<Login></Login>},
            {path:'/register', element: <Register></Register>}
        ]

    }
])
