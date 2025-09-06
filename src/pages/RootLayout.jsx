import Navbar from "../components/Navbar.jsx"
import { Outlet} from "react-router"
import Footer from "../components/Footer.jsx"

export default function RootLayout(){
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
         </>
    )
}