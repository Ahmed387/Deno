import { Swiper, SwiperSlide } from "swiper/react";
import img3 from "../../../../public/banner2.webp";
import img2 from "../../../../public/شارع.webp";
import img1 from "../../../../public/تيم.webp";

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
            className={`${styles.bgoverlay} flex justify-center items-center text-white text-3xl`}
          >
            <h1>Ahmed Salah</h1>
          </div>
          <img src={img1} alt="Banner 1" className={styles.swiperImage} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.bgoverlay}></div>
          <img src={img2} alt="Banner 2" className={`${styles.swiperImage} `} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.bgoverlay}></div>
          <img src={img3} alt="Banner 3" className={styles.swiperImage} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
