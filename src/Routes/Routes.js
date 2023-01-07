import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignIn/SignUp";
export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/signIn', element:<SignIn></SignIn>},
        {path:'/signUp', element:<SignUp></SignUp>}
    ]}
])