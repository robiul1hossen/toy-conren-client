import { FaQuoteRight } from "react-icons/fa";
import "./banner.css";
import { TypeAnimation } from "react-type-animation";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    // <div className="banner">
    //   <div className="w-full h-full relative">
    //     <div className="text-white flex justify-center md:items-center items-start h-full">
    //       <div>
    //         <div></div>
    //         <h2 className=" text-center w-4/5 mx-auto text-xl md:text-3xl text-yellow-500 my-6">
    //           <TypeAnimation
    //             preRenderFirstString={true}
    //             sequence={[
    //               // Same substring at the start will only be typed once, initially
    //               "Explore the Future of Play, Today_",
    //               1000,
    //               "Electrify Your Entertainment Experience_",
    //               1000,
    //               "Discover Endless Adventures in Electronics_",
    //               1000,
    //               "From Robots to Remote Controls – Your Adventure Awaits_",
    //               1000,
    //             ]}
    //             speed={50}
    //             repeat={Infinity}
    //           />
    //           <span className="banner-quote">
    //             <FaQuoteRight></FaQuoteRight>
    //           </span>
    //         </h2>
    //         <p className="w-3/4 mx-auto md:text-xl text-sm">
    //           Step into a world of electronic wonder where playtime meets
    //           innovation. Explore our curated collection of cutting-edge
    //           electronic toys that ignite creativity and captivate all ages.
    //           From interactive robots to high-tech gadgets, immerse yourself in
    //           the future of entertainment. Discover endless possibilities and
    //           elevate your playtime experience with the latest in electronic
    //           fun.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
