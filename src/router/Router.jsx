import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import IndividualResult from "../pages/InsividualResult/IndividualResult";
import GuidLine from "../pages/guidline/GuidLine";
import Home from "../layout/home/Home";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/individualResult",
                element: <IndividualResult></IndividualResult>,
            },
            {
                path: "/guideline/individual",
                element: <GuidLine></GuidLine>,
            },
        ],
    },
]);

export default router;
