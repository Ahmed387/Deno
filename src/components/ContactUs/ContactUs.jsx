import { FaLocationDot } from "react-icons/fa6";
import img1 from "../../../public/IMG_4431_6_11zon.webp";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { toast } from "react-toastify";

export default function ContactUs() {
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
      <div className="flex justify-center items-center h-auto bg-gray-100 mt-10 w-full">
        <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden my-14 w-full">
      
          <div className="w-full sm:w-1/2">
            <img
              src={img1}
              alt="Shiny White Clinic"
              className="w-full h-full object-cover"
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
                  <li
                    className="flex items-center cursor-pointer"
                    onClick={() => copy(phoneNumber)}
                  >
                    <span className="mr-2 text-3xl">📞</span>
                    <span className="text-2xl">+20 1094394947</span>
                  </li>
                  <li
                    className="flex items-center cursor-pointer"
                    onClick={Whats}
                  >
                    <BsWhatsapp
                      size={33}
                      title="Click to chat on WhatsApp"
                      className="text-green-600"
                    />
                    <span className="ml-2 text-2xl">WhatsApp</span>
                  </li>
                </div>

                {/* Right Section with 3 li items */}
                <div className="flex flex-col gap-6 sm:gap-8">
                  <li className="flex items-center">
                    <span className="mr-2 text-3xl">📧</span>
                    <span className="text-2xl">info@maadidentalcenter.com</span>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="https://www.instagram.com/maadidentalcenter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-cyan-400"
                    >
                      <FaInstagram size={32} className="mr-2 text-3xl" />
                      <span className="text-2xl">Instagram</span>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="https://maps.app.goo.gl/7tpEj5z2fU4HzHwM9?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center texxt-2xl hover:text-cyan-400"
                    >
                      <FaLocationDot size={30} className="mr-2 " />
                      <span className="text-2xl">Location</span>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
