import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Banner from "../pages/Banner/Banner";
import IndividualResult from "../pages/InsividualResult/IndividualResult";
import GuidLine from "../pages/guidline/GuidLine";

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
            },
            {
                path:'/guideline',
                element:<GuidLine></GuidLine>
            }
        ]
    },
]);

export default router;