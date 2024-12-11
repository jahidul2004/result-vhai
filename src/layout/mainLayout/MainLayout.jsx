import { Outlet } from "react-router-dom";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
