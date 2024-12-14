import { createBrowserRouter } from "react-router";
import MainLayout from "../Main-Layout/MainLayout";
import Error from "../error/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllJobs from "../pages/AllJobs";
import PrivateRoute from "../private/PrivateRoute";
import Appliction from "../pages/Appliction";
import MyApplication from "../pages/MyApplication";
import AddJobs from "../pages/AddJobs";
import MyPost from "../pages/MyPost";
import ApplicantDetails from "../pages/ApplicantDetails";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {path:'/', element:<Home></Home>},
            {path:'/applicant/:user_id', element:<PrivateRoute><ApplicantDetails></ApplicantDetails></PrivateRoute>},
            {path:'/mypost', element:<PrivateRoute><MyPost></MyPost></PrivateRoute>},
            {path:'/application/:id', element:<PrivateRoute><Appliction></Appliction></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:4000/job?id=${params.id}`)
            },
            {path:'/myapplication', element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>},
            {path:'/alljobs', element:<PrivateRoute><AllJobs></AllJobs></PrivateRoute>},
            {path:'/addjobs' , element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>},
            {path:'/login', element:<Login></Login>},
            {path:'/register', element: <Register></Register>},
            
        ]

    }
])
