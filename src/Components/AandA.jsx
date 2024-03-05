import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function AandA() {
  return (
    <div className="w-full h-[50vh] overflow-hidden text-white font-bold text-3xl aff">
      <div className="w-full justify-center items-center flex mt-[10vh] cont">
        <h1>ACCREDATION AND AFFILIATION</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        breakpoints={{
          600:{
            slidesPerView:5,
            spaceBetween:30
          }
        }}
        className="mySwiper2 w-full h-[40vh]"
      >
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/Media-Entertainment-Skill-Council.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">Media Entertainment Skill Council</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/Food-Industry-Capacity-Skill-Initiative.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">Food Industry Capacity Skill Intiative</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/UGC.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">UGC</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/nasscom.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">NASSCOM</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/Agriculture-Skill-Council-of-India.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">Agriculture Skill Council of India</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/Beauty-Wellness-Sector-Skill-Council-139x69.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">Beauty Wellness Sector Skill Council</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/Media-Entertainment-Skill-Council.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">Media Entertainment Skill Council</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/Food-Industry-Capacity-Skill-Initiative.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">Food Industry Capacity Skill Intiative</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/UGC.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">UGC</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/nasscom.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">NASSCOM</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/Agriculture-Skill-Council-of-India.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">Agriculture Skill Council of India</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg">
          <div className="rounded-xl overflow-hidden w-[10vw]">
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/Beauty-Wellness-Sector-Skill-Council-139x69.png"
              alt=""
            />
          </div>
          <h1 className="h-1/3 w-[10vw] pt-2 text-base text-center">Beauty Wellness Sector Skill Council</h1>
        </SwiperSlide>
       
     
      
        
        
      </Swiper>
    </div>
  );
}

export default AandA;
