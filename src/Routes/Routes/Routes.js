import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Deshboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/RegistarLogin/Login/Login";
import Register from "../../Pages/RegistarLogin/Register/Register";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Register></Register>
            },
        ]
        

    },
    {
        path:'/dashboard',
        element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>
    }
])
export default router;