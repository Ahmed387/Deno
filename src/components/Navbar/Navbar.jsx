import { toast } from "react-toastify";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
function Navbar() {
  const phoneNumber = 1094394947;
  const [isopen, setisopen] = useState(false);

  function togglemenue() {
    setisopen((prevstate) => !prevstate);
  }

  const Whats = () => {
    const message = "مرحبًا، كيف يمكنني مساعدتك؟";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  function copy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Successfully Copied!");
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo.webp"
              className="w-24 h-24 rounded-full"
              alt=" Logo"
              loading="lazy"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  ">
            <div>
              <div className="flex justify-center  items-center  flex-row gap-6 cursor-pointer">
                <BsWhatsapp
                  onClick={Whats}
                  size={32}
                  title="Click to chat on WhatsApp"
                  className="text-green-600"
                />

                <FcPhoneAndroid
                  onClick={() => copy(phoneNumber)}
                  title="Click to copy phone number"
                  size={32}
                  className="text-blue-500"
                />

                <a
                  href="https://www.instagram.com/fly.dent.dental.clinic?igsh=MTg4dDdqMHlnaGZ0aA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={32}
                    className="text-[#F501CB]"
                    title="Go to Instagram"
                  />
                </a>
                <a
                  href="https://maps.app.goo.gl/7tpEj5z2fU4HzHwM9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-cyan-400"
                >
                  <FaLocationDot size={30} className="mr-2 text-blue-600" />
                </a>
              </div>
            </div>

            <button
              onClick={togglemenue}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={`${isopen ? "true" : "false"}`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col text-xl font-mono p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourteam"}
                  className="block  px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourservice"}
                  className="block  px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/reservation"}
                  className="block  px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Reservation
                </Link>
              </li>

              <li>
                <Link
                  to={"/contactus"}
                  className="block  px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
