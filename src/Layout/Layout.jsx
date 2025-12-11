import { Outlet } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <div className="min-vh-100">
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;