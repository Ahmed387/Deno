export default function Cases() {
  const caseImages = [
    { src: "/case2.webp", alt: "Case 2" },
    { src: "/case1.webp", alt: "Case 1" },
    { src: "/case6.webp", alt: "Case 6" },
    { src: "/case3.webp", alt: "Case 3" },
    { src: "/case4.webp", alt: "Case 4" },
    { src: "/case5.webp", alt: "Case 5" },
  ];

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <span className="text-3xl md:text-4xl my-10 bg-blue-500 font-bold text-white px-4 py-2 rounded-lg shadow-lg">
          Our Cases
        </span>
      </div>

      <div className="flex justify-center items-center gap-6 flex-wrap border-gray-300 p-8 border-b-2">
        {/* Grouping the first set of images */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {caseImages.slice(0, 4).map((image, index) => (
            <img
              key={index}
              className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter-none md:filter md:grayscale hover:grayscale-0"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>

        {/* Grouping the second set of images */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {caseImages.slice(4).map((image, index) => (
            <img
              key={index}
              className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter-none md:filter md:grayscale hover:grayscale-0"
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  );
}
