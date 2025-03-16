import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Mainslider.module.css";

import { Pagination, Navigation } from "swiper/modules";

export default function Mainslider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <div
            className={` flex justify-center items-center text-white text-3xl`}
          >
            <h1>Ahmed Salah</h1>
          </div>
          <img src="/تيم.webp" alt="Banner 1" className={styles.swiperImage} />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img
            src="/شارع.webp"
            alt="Banner 2"
            className={`${styles.swiperImage} `}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img
            src="/banner2.webp"
            alt="Banner 3"
            className={styles.swiperImage}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
