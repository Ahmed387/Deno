import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


export default function Layout() {
  return (
    <div className=" mt-5  min-h-screen flex flex-col">
 

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
