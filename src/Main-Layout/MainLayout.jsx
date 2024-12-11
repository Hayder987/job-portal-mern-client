import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <div className="min-h-[70vh]">
             <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;