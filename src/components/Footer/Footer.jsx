import { FaInstagram } from "react-icons/fa";
import op3 from "../../../public/logo.webp";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Our Service", path: "/ourservice" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Our Clinic", path: "/ourbranches" },
    { name: "Our Cases", path: "/cases" },
    { name: "Reservation", path: "/reservation" },
    { name: "Contact", path: "/contactus" },
  ];

  const phoneNumber = 1094394947;

  
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
      <footer className="bg-gray-900 text-white w-full mt-10">
        <div className="flex flex-col w-full mt-10 sm:flex-row justify-between items-center gap-10 sm:gap-10 px-5">
          {/* Left Section */}
          <div className="flex flex-col justify-start mt-12 sm:mt-0 sm:w-1/3 w-full mb-6 border-4 border-black">
            <div className="flex items-center space-x-2">
              <img
                src={op3}
                alt="Maadi Dental Center"
                className="h-12 w-12 rounded-full"
              />
              <h1 className="text-2xl font-semibold text-center sm:text-left">
                Maadi Dental Center{" "}
                <h2 className="text-sm font-light">
                  Professional and Advanced Care
                </h2>
              </h1>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              Maadi Dental Center provides high-quality, personalized dental
              care with advanced technology like CEREC CAD/CAM for same-day
              crowns and Waterlase MD™ for reduced anesthesia needs. Led by
              expert professionals such as Dr. Hisham Azim, Dr. Dena Ahmed, and
              Dr. Asmaa Elshinnawy, the clinic specializes in oral and
              maxillofacial surgery.
            </p>
            <p className="mt-4 text-gray-300 text-sm">
              The center ensures patient comfort with a relaxing environment,
              strict hygiene standards, and head-mounted digital screen glasses
              for entertainment during treatment. Maadi Dental Center offers a
              wide range of services, including preventive care, restorative
              treatments, and orthodontics.
            </p>
          </div>

      
          <div className="flex flex-col justify-between items-start sm:items-center sm:w-1/3 w-full mb-6">
            <h3 className="text-xl font-semibold text-cyan-400 mx-auto">
              Our Services
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

     
          <div className="flex flex-col justify-between items-start sm:items-start sm:w-1/3 w-full mb-6">
            <h3 className="text-xl font-semibold text-cyan-400 mx-auto sm:mx-0 ">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li
                className="flex items-center"
                onClick={() => copy(phoneNumber)}
              >
                <span className="mr-2 text-2xl">📞</span>
                <span>+20 1094394947</span>
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
                  Instagram
                </a>
              </li>
              <li onClick={Whats} className="flex items-center">
                <BsWhatsapp
                  size={30}
                  title="Click to chat on WhatsApp"
                  className="text-green-600"
                />
                <span className="text-xl">WhatsApp</span>
              </li>
              <li className="flex items-center">
                <a
                  href="https://maps.app.goo.gl/7tpEj5z2fU4HzHwM9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-cyan-400"
                >
                  <FaLocationDot size={30} className="mr-2" />
                  <span className="text-xl">Location</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="my-5 flex justify-center items-center border-t border-gray-700 pt-5 text-white font-light">
          <p>All rights reserved in 2025. Created by A.s</p>
        </div>
      </footer>
    </>
  );
}
