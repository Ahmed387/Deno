import case1 from "../../../public/case1.webp";
import case2 from "../../../public/case2.webp";
import case3 from "../../../public/case3.Webp";
import case4 from "../../../public/case4.Webp";
import case5 from "../../../public/case5.Webp";
import case6 from "../../../public/case6.Webp";

export default function Cases() {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <span className="text-3xl md:text-4xl my-10 bg-blue-500 font-bold text-white px-4 py-2 rounded-lg shadow-lg">
          Our Cases
        </span>
      </div>

      <div className="flex justify-center items-center gap-6 flex-wrap border-gray-300 p-8 border-b-2 ">
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter-none md:filter md:grayscale hover:grayscale-0"
            src={case2}
            alt="Case 2"
          />
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter-none md:filter md:grayscale hover:grayscale-0"
            src={case1}
            alt="Case 1"
          />
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter-none md:filter md:grayscale hover:grayscale-0"
            src={case6}
            alt="Case 6"
          />
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter-none md:filter md:grayscale hover:grayscale-0"
            src={case3}
            alt="Case 3"
          />
        </div>

        <div className="flex justify-center items-center gap-6 flex-wrap">
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter-none md:filter md:grayscale hover:grayscale-0"
            src={case4}
            alt="Case 4"
          />
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter-none md:filter md:grayscale hover:grayscale-0"
            src={case5}
            alt="Case 5"
          />
        </div>
      </div>
    </>
  );
}
