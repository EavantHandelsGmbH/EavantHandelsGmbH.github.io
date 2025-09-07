import Navbar from "../components/Navbar.jsx";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}
