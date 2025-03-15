
import img1 from "../../../public/medical8.webp";
import img2 from "../../../public/medical9.webp";
import img3 from "../../../public/dental.webp";
import img5 from "../../../public/dentist.webp";
import img6 from "../../../public/dentist1.webp";
import img7 from "../../../public/root.webp";
import img8 from "../../../public/teeth.webp";
import img9 from "../../../public/tooth.webp";
import img10 from "../../../public/tooth1.webp";
import img11 from "../../../public/tooth2.webp";

export default function Ourservice() {

  const services = [
    {
      img: img3,
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile by reshaping or recoloring teeth that are too big, small, or crooked.",
    },
    {
      img: img1,
      title: "Implants",
      description:
        "We will help you replace missing teeth, provide a long-term solution, slow down bone loss, and preserve relevant healthy teeth.",
    },
    {
      img: img2,
      title: "Orthodontics (Braces)",
      description:
        "Braces have come a long way since we started. Our team is introducing modern solutions.",
    },
    {
      img: img5,
      title: "CEREC",
      description:
        "With the new CEREC CAD/CAM technology, you can now receive all ceramic crowns and fillings in the same day.",
    },
    {
      img: img9,
      title: "Periodontal Therapy",
      description:
        "Avoid gum bleeding and abscess formation with WATERLASE laser technology.",
    },
    {
      img: img10,
      title: "Root Canal Treatment",
      description:
        "Treat root canals in a single visit and maintain healthy teeth while preventing jaw problems.",
    },
    {
      img: img7,
      title: "Oral Surgeries",
      description:
        "Our oral surgery team handles all surgical tasks with professionalism and expertise.",
    },
    {
      img: img8,
      title: "Dentistry for Children",
      description:
        "We create a child-friendly atmosphere to keep our young patients comfortable.",
    },
    {
      img: img11,
      title: "Restorative Dentistry",
      description:
        "Restore missing, decayed, or damaged teeth with top-class restorative dentistry.",
    },
    {
      img: img6,
      title: "Digital Radiography",
      description:
        "We use the latest digital X-ray imaging system for dental diagnostics.",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center my-10">
        <h2 className="text-3xl md:text-4xl bg-blue-500 font-bold text-white px-4 py-2 rounded-lg shadow-lg">
          Our Services
        </h2>
      </div>
      <div className="border-b-2 border-gray-300 p-8 container mb-16 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 lg:px-8">
   
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-20 h-20 mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
