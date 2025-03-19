import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Teamslider from "./components/Sliders/Teamslider/Teamslider";
import Ourbranches from "./components/Ourbranches/Ourbranches";
import Reservation from "./components/Reservation/Reservation";
import Notfound from "./components/Notfound/Notfound";
import Appear from "./components/Appear/Appear";
import { ToastContainer } from "react-toastify"; // استيراد ToastContainer
import { useEffect } from "react";
import Ourservice from "./components/Ourservice/Ourservice";
import ContactUs from "./components/ContactUs/ContactUs";
import "react-toastify/dist/ReactToastify.css"; // استيراد تنسيق الـ CSS
import Cases from "./components/Cases/Cases";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/ourteam",
        element: <Teamslider />,
      },
      {
        path: "/ourbranches",
        element: <Ourbranches />,
      },
      {
        path: "/cases",
        element: <Cases />,
      },
      {
        path: "/ourservice",
        element: <Ourservice />,
      },
      {
        path: "/Admin11",
        element: <Appear />,
      },
      {
        path: "*",
        element: <Notfound />, //404 page
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </Provider>
  );
}

export default App;
