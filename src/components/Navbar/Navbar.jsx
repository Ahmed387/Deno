import { toast } from "react-toastify";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleLanguage,
  selectLanguage,
} from "../../redux/features/languageSlice";
import { useTranslation } from "../../hooks/useTranslation";

function Navbar() {
  const phoneNumber = 1094394947;
  const [isopen, setisopen] = useState(false);
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function toggleMenu() {
    setisopen((prevState) => !prevState);
  }

  const Whats = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        t("whatsappMessage")
      )}`,
      "_blank"
    );
  };

  function copy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success(t("copySuccess"));
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 pb-1">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo.webp"
              className="w-10 h-10 md:w-24 md:h-24 rounded-full"
              alt=" Logo"
              loading="lazy"
            />
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div>
              <div className="flex justify-center items-center flex-row gap-6 cursor-pointer">
                <button
                  onClick={() => dispatch(toggleLanguage())}
                  className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  title={
                    language === "en" ? "Switch to Arabic" : "Switch to English"
                  }
                >
                  {language === "en" ? "AR" : "EN"}
                </button>
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
              onClick={toggleMenu}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-end md:justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={`${isopen ? "true" : "false"}`}
            >
              <span className="sr-only">{t("openMenu")}</span>
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
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isopen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col text-xl font-mono p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourteam"}
                  className="block px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("ourTeam")}
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourservice"}
                  className="block px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  to={"/reservation"}
                  className="block px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("reservation")}
                </Link>
              </li>
              <li>
                <Link
                  to={"/contactus"}
                  className="block px-3 md:p-0 text-gray-900 rounded-sm hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {t("contact")}
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
