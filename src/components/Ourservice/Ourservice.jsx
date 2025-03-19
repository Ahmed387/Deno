import { useTranslation } from "../../hooks/useTranslation"; // استيراد الدالة الخاصة بالترجمة

export default function Ourservice() {
  const { t } = useTranslation(); // استخدام الترجمة من hook
  const services = [
    {
      img: "/dental.webp",
      title: t("cosmeticDentistry"), // استخدام الترجمة
      description: t("cosmeticDentistryDescription"),
    },
    {
      img: "/medical8.webp",
      title: t("implants"),
      description: t("implantsDescription"),
    },
    {
      img: "/medical9.webp",
      title: t("orthodontics"),
      description: t("orthodonticsDescription"),
    },
    {
      img: "/dentist.webp",
      title: t("cerec"),
      description: t("cerecDescription"),
    },
    {
      img: "/tooth.webp",
      title: t("periodontalTherapy"),
      description: t("periodontalTherapyDescription"),
    },
    {
      img: "/tooth1.webp",
      title: t("rootCanalTreatment"),
      description: t("rootCanalTreatmentDescription"),
    },
    {
      img: "/root.webp",
      title: t("oralSurgeries"),
      description: t("oralSurgeriesDescription"),
    },
    {
      img: "/teeth.webp",
      title: t("dentistryForChildren"),
      description: t("dentistryForChildrenDescription"),
    },
    {
      img: "/dentist1.webp",
      title: t("restorativeDentistry"),
      description: t("restorativeDentistryDescription"),
    },
    {
      img: "/tooth2.webp",
      title: t("digitalRadiography"),
      description: t("digitalRadiographyDescription"),
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center my-10 ">
        <h2 className="text-3xl md:text-4xl bg-blue-500 font-bold text-white px-4 py-2 rounded-lg shadow-lg">
          {t("ourServices")}
        </h2>
      </div>
      <div className="border-b-4 border-red-600 my-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 lg:px-8">
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
