import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import IndividualResult from "../pages/InsividualResult/IndividualResult";
import GuidLine from "../pages/guidline/GuidLine";
import Home from "../layout/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/individualResult',
                element:<IndividualResult></IndividualResult>
            },
            {
                path:'/guideline/individual',
                element:<GuidLine></GuidLine>
            }
        ]
    },
]);

export default router;