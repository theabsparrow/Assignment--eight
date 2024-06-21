import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const Layout = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;