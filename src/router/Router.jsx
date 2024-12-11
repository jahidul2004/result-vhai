import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Banner from "../pages/Banner/Banner";
import IndividualResult from "../pages/InsividualResult/IndividualResult";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Banner></Banner>
            },
            {
                path:'/individualResult',
                element:<IndividualResult></IndividualResult>
            }
        ]
    },
]);

export default router;