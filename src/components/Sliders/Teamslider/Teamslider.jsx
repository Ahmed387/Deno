const teamData = [
  {
    name: "DR HISHAM AZIM",
    title: "Associate Professor - Oral & Maxillofacial Surgery",
    details: "Faculty of Dentistry, Cairo University",
    img: "/two.webp",
  },
  {
    name: "DR Dena Ahmed",
    title: "Associate Professor - Oral & Maxillofacial Surgery",
    details: "Faculty of Dentistry, Cairo University",
    img: "/one.webp",
  },
  {
    name: "DR Asmaa Elshinnawy",
    title: "Associate Professor - Oral & Maxillofacial Surgery",
    details: "Faculty of Dentistry, Cairo University",
    img: "/three.webp",
  },
];

export default function Teamslider() {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <span className="text-3xl md:text-4xl my-10 bg-blue-500 font-bold text-white px-4 py-2 rounded-lg shadow-lg">
          Our Team
        </span>
      </div>
      <div className="container mx-auto px-4 border-b-2 border-gray-300 p-8">
        <div className="flex justify-center items-center flex-col md:flex-row gap-5">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="w-full  md:w-1/4 bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-6 flex flex-col items-center"
            >
              <div className="overflow-hidden rounded-t-lg">
                {/* Image with fixed height */}
                <img
                  className="w-full h-96 object-cover pt-10" // تحديد ارتفاع ثابت للصور
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white">
                  {member.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {member.title}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {member.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
