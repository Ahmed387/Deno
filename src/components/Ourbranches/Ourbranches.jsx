import { SwiperSlide } from "swiper/react";
import img2 from "../../../public/IMG_4328_1_11zon.webp";
import img4 from "../../../public/IMG_4367_2_11zon.webp";
import img6 from "../../../public/IMG_4389_3_11zon.webp";
import img10 from "../../../public/IMG_4431_6_11zon.webp";
import img12 from "../../../public/IMG_4437_7_11zon.webp";
import { Swiper } from "swiper/react";
import styles from "./Ourbranches.module.css"; 
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Ourbranches() {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <span className="text-3xl md:text-4xl my-10 bg-blue-500 font-bold text-white px-4 py-2 rounded-lg shadow-lg">
          Our Clinic
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4 py-8 border-b-2 my-10 border-gray-300">
       
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <img
                src={img2}
                loading="lazy"
                className={styles.swiperImage}
                alt="clinic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img4}
                loading="lazy"
                className={styles.swiperImage}
                alt="clinic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img6}
                loading="lazy"
                className={styles.swiperImage}
                alt="clinic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img10}
                loading="lazy"
                className={styles.swiperImage}
                alt="clinic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img12}
                loading="lazy"
                className={styles.swiperImage}
                alt="clinic"
              />
            </SwiperSlide>
          </Swiper>
        </div>

   
        <div className="flex justify-center items-center">
          <video
            width="100%"
            height="auto"
            controls
            className={styles.video}
            preload="auto"
            autoPlay
            muted
            playsInline
          >
            <source src="/clinic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
