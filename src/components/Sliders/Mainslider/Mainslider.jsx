import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Mainslider.module.css";

import { Pagination } from "swiper/modules"; // فقط الـ Pagination بدون الـ Navigation

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
        modules={[Pagination]} // تم إزالة الـ Navigation هنا
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <img
            src="/team.webp"
            alt="Banner 2"
            className={`${styles.swiperImage}`}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/شارع.webp"
            alt="Banner 2"
            className={`${styles.swiperImage}`}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/banner2.webp"
            alt="Banner 3"
            className={`${styles.swiperImage}`}
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
