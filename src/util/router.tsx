import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/RootLayout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import KontaktPage from "../pages/Contact";
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/DataPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "kontakt", element: <KontaktPage /> },
      { path: "impressum", element: <Impressum /> },
      { path: "datenschutz", element: <Datenschutz /> },
    ],
  },
]);

export default router;
