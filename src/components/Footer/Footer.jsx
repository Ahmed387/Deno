import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "../../hooks/useTranslation"; // استيراد useTranslation

export default function Footer() {
  const { t } = useTranslation(); // استخدام الترجمة
  const pages = [
    { name: t("home"), path: "/" },
    { name: t("ourService"), path: "/ourservice" },
    { name: t("ourTeam"), path: "/ourteam" },
    { name: t("ourClinic"), path: "/ourbranches" },
    { name: t("ourCases"), path: "/cases" },
    { name: t("reservation"), path: "/reservation" },
    { name: t("contact"), path: "/contactus" },
  ];

  const phoneNumber = "1094394947";

  const Whats = () => {
    const message = t("whatsappMessage");
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
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
      <footer className="bg-gray-900 text-white w-full mt-10">
        <div className="flex flex-col w-full mt-10 sm:flex-row justify-between items-center gap-10 sm:gap-10 px-5">
          {/* Left Section */}
          <div className="flex flex-col justify-start mt-12 sm:mt-0 sm:w-1/3 w-full mb-6 border-4 border-black">
            <div className="flex items-center space-x-2 gap-3">
              <img
                src="/logo.webp"
                alt="Maadi Dental Center"
                className="h-10 w-10 md:w-14 md:h-14  rounded-full"
              />
              <div className="flex justify-center items-center flex-col md:flex-row">
                <p className="text-2xl font-semibold text-center sm:text-left">
                  {t("maadiDentalCenter")}
                </p>
                <span className="text-sm text-gray-500 font-light">
                  {t("professionalCare")}
                </span>
              </div>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              {t("dentalCenterDescription")}
            </p>
            <p className="mt-4 text-gray-300 text-sm">
              {t("comfortAndHygieneDescription")}
            </p>
          </div>

          {/* Our Services Section */}
          <div className="flex flex-col justify-between items-start sm:items-center sm:w-1/3 w-full mb-6">
            <h3 className="text-xl font-semibold text-cyan-400 mx-auto">
              {t("ourServices")}
            </h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              {pages.map((page) => (
                <Link key={page.name} to={page.path}>
                  <li className="hover:text-cyan-400 cursor-pointer">
                    &raquo; {page.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col justify-between items-start sm:items-start sm:w-1/3 w-full mb-6">
            <h3 className="text-xl font-semibold text-cyan-400 mx-auto sm:mx-0">
              {t("contactUs")}
            </h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li
                className="flex items-center"
                onClick={() => copy(phoneNumber)}
              >
                <span className="mr-2 text-2xl">📞</span>
                <span>+20 {phoneNumber}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-2xl">📧</span>
                <span>info@maadidentalcenter.com</span>
              </li>
              <li className="flex items-center">
                <a
                  href="https://www.instagram.com/maadidentalcenter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-cyan-400"
                >
                  <FaInstagram size={30} className="mr-2" />
                  {t("instagram")}
                </a>
              </li>
              <li onClick={Whats} className="flex items-center">
                <BsWhatsapp
                  size={30}
                  title={t("whatsappTitle")}
                  className="text-green-600"
                />
                <span className="text-xl">{t("whatsapp")}</span>
              </li>
              <li className="flex items-center">
                <a
                  href="https://maps.app.goo.gl/7tpEj5z2fU4HzHwM9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-cyan-400"
                >
                  <FaLocationDot size={30} className="mr-2" />
                  <span className="text-xl">{t("location")}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="my-5 flex justify-center items-center border-t border-gray-700 pt-5 text-white font-light">
          <p>{t("footerText")}</p>
        </div>
      </footer>
    </>
  );
}
