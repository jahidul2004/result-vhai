import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import IndividualResult from "../pages/InsividualResult/IndividualResult";
import GuidLine from "../pages/guidline/GuidLine";
import Home from "../layout/home/Home";
import NotFound from "../pages/NotFound/NotFound";
import CGPACalc from "../pages/cgpaCalc/CgpaCalc";
import Result from "../pages/result/Result";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/individualResult", element: <IndividualResult /> },
            { path: "/guideline/individual", element: <GuidLine /> },
            { path: "/cgpaCalculator", element: <CGPACalc /> },
            { path: "/result/:roll", element: <Result /> },
        ],
    },
]);

export default router;
