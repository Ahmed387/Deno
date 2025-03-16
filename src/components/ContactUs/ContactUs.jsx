import { FaLocationDot } from "react-icons/fa6";

import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { toast } from "react-toastify";
import { useCallback } from "react";

// مكون لتمثيل عنصر الاتصال
const ContactItem = ({ icon, text, onClick, link }) => (
  <li className="flex items-center cursor-pointer" onClick={onClick}>
    {icon}
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 text-2xl hover:text-cyan-400"
      >
        {text}
      </a>
    ) : (
      <span className="text-2xl">{text}</span>
    )}
  </li>
);

export default function ContactUs() {
  const phoneNumber = "1094394947";

  const Whats = useCallback(() => {
    const message = "مرحبًا، كيف يمكنني مساعدتك؟";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }, [phoneNumber]);

  const copy = useCallback((text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Successfully Copied!");
      })
      .catch((err) => {
        toast.error("Failed to copy: " + err);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100 mt-10 w-full">
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden my-14 w-full">
        <div className="w-full sm:w-1/2">
          <img
            src="/IMG_4431_6_11zon.webp"
            alt="Shiny White Clinic"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="w-full sm:w-1/2 p-8">
          <h2 className="text-3xl mx-auto text-center font-semibold text-blue-500 mb-10">
            Contact Information
          </h2>

          <div className="flex flex-col justify-center items-center gap-4">
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
              {/* Left Section with 2 li items */}
              <div className="flex flex-col gap-6 sm:gap-8">
                <ContactItem
                  icon={<span className="mr-2 text-3xl">📞</span>}
                  text={`+20 ${phoneNumber}`}
                  onClick={() => copy(phoneNumber)}
                />
                <ContactItem
                  icon={<BsWhatsapp size={33} className="text-green-600" />}
                  text="WhatsApp"
                  onClick={Whats}
                />
              </div>

              {/* Right Section with 3 li items */}
              <div className="flex flex-col gap-6 sm:gap-8">
                <ContactItem
                  icon={<span className="mr-2 text-3xl">📧</span>}
                  text="info@maadidentalcenter.com"
                />
                <ContactItem
                  icon={<FaInstagram size={32} className="mr-2 text-3xl" />}
                  text="Instagram"
                  link="https://www.instagram.com/maadidentalcenter"
                />
                <ContactItem
                  icon={<FaLocationDot size={30} className="mr-2" />}
                  text="Location"
                  link="https://maps.app.goo.gl/7tpEj5z2fU4HzHwM9?g_st=aw"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
