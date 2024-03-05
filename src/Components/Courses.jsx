import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Courses() {
  return (
    <>
      <div className="course-container w-full h-[150vh] mt-[20vh]  bg-[#B0D2FD]">
        <div className="head flex items-center justify-center py-[10vh] mt-5">
          <h1 className="bold text-5xl text-[#4F2376] underline mb-[5vh]">
            PROGRAMMES OFFERED AT SGSU
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={true}
          modules={[Pagination,Autoplay]}
          autoplay={{
            delay:2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper h-screen"
        >
          <SwiperSlide>
            <div className=" p-5 font-bold text-[#4F2376] text-2xl">
              <h1>FACULTY OF ENGINEERING AND TECHNOLOGY SKILLS</h1>
            </div>
            <div className="">
              {[
                "B.Tech(AI/ML) in collaboration with TCS",
                "B.Tech.(CSE/AIDS/CAD)",
                "M.Tech.(CSE/AIML)",
                "M.C.A. ",
                "B.Tech ECE, (Internet of Things)",
                "M.Tech VLSI",
                "M.Tech Digital Comm",
                "Diploma ME(Precision Engg/ Welding Technology/Auto-HMCL) in collaboration with Hero Motors, Hyundai Motors",
                "B.Tech ME (Automation Engg.)/(Precision Engg)",
                "M.Tech (Thermal Engg.)",
                "Diploma EEE",
                "B.Tech EEE",
                "M.Tech Power System",
              ].map((item, index) => {
                return (
                  <li
                    className="list-disc popins text-zinc-900 text-[.9vw] px-[1vw] mt-1 leading-relaxed"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 font-bold text-[#4F2376] text-2xl">
              <h1>FACULTY OF MANAGEMENT STUDIES</h1>
            </div>
            <div className="">
              {[
                "BBA (Marketing & Sales/ HR/Computer Application/ International Business)",

                "MBA (BUSINESS ANALYTICS) in collaboration with TNL",

                "BBA - Entrepreneurship & startups",
                "MBA - Entrepreneurship & startups",
                "BBA / B. Voc - Hospitality Management",
                "BBA / B. Voc - Tour & Travel Management",
                "BBA - Catering Technology Cullinary Arts",
                "MBA - Tourism &Hospitality Management",
                "M Voc - Travel & Tourism",
                "BBA - Logistics Collaboration with Sector Skill Council of Logistics Sector Skill Council",
              ].map((item, index) => {
                return (
                  <li
                    className="list-disc popins text-zinc-900 text-[.9vw] px-5 mt-1 leading-relaxed"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 font-bold text-[#4F2376] text-2xl">
              <h1>FACULTY OF FUTURE SKILLS</h1>
            </div>
            <div className="">
              {[
                "BCA (Data Science) in collaboration with TNL",
                "BCA (AI/ML) in collaboration with TNL",
                "B.Sc. (Full Stack Development)",
                "B.Sc. ( Cloud & Cyber Security) in collaboration with TNL",
                "M.Sc. (Data Science) in collaboration with TNL",
                "M.Sc. (AI/ML) / (Full Stack Development)",
                "M.Sc. ( Cloud & Cyber Security) in collaboration with TNL",
                "B.Sc. (Animation & VFX)",
                "B.Sc. (Game Design & Development)",
                "M.Sc. (Animation & VFX)",
                "M.Sc. (Game Design & Development)",
              ].map((item, index) => {
                return (
                  <li
                    className="list-disc popins text-zinc-900 text-[.9vw] px-5 mt-1 leading-relaxed"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 font-bold text-[#4F2376] text-2xl">
              <h1>FACULTY OF BANKING, FINANCE AND COMMERCE</h1>
            </div>
            <div className="">
              {[
                "MBA in collaboration sector Skill council of BFSI",
                "BBA - BFSI collaboration with Sector Skill Council of BFSI",
                "BBA in Office Administration, Secretarial Practice and Entrepreneurship Collaboration with Management & Entrepreneurship and Professional Skills Council",
                "B.Com Retail Management Collaboration with Management & Entrepreneurship and Professional Skills Council",
                "BBA Financial Accounting",
                "B.Com Retail Operations and Mercahandising",
                "B.Com Accounts & Taxation",
                "B.Com (Economics)",
                "B.Com (Computer Application)",
                "M.Com Taxation",
                "M.Com Financial Services",
                "M.Com Management",
                "M.Com Accounting",
              ].map((item, index) => {
                return (
                  <li
                    className="list-disc popins text-zinc-900 text-[.9vw] px-5 mt-1 leading-relaxed"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 font-bold text-[#4F2376] text-2xl">
              <h1>FACULTY OF HUMANITIES AND LIBERAL ARTS</h1>
            </div>
            <div className="">
              {[
                "BA (Hons) (Maths/ Psychology/ Yoga/ Social Work/ Nutrition & Dietetics/ Economics/ Political Science/ History/ Computer Application / English Literature)",
                "B.Voc/BFA in Painting & Sculpture",
                "BA (Computer Application)",
                "MA (English Literature / Psychology)",
                "B.lib",
                "M.lib",
                "Diploma (Music/ Dance/ Fine Arts)",
                "Diploma In Language (German/ French/ Japanese)",
              ].map((item, index) => {
                return (
                  <li
                    className="list-disc popins text-zinc-900 text-[.9vw] px-5 mt-1 leading-relaxed"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 font-bold text-[#4F2376] text-2xl">
              <h1>FACULTY OF INFORMATION TECHNOLOGY</h1>
            </div>
            <div className="">
              {["BSC(CS)", "BCA(IT)", "MSc(CS)", "DCA", "PGDCA"].map(
                (item, index) => {
                  return (
                    <li
                      className="list-disc popins text-zinc-900 text-[.9vw] px-5 mt-1 leading-relaxed"
                      key={index}
                    >
                      {item}
                    </li>
                  );
                }
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 font-bold text-[#4F2376] text-2xl">
              <h1>FACULTY OF EMERGING TECHNOLOGIES</h1>
            </div>
            <div className="">
              {[
                "B.Sc ( Automotive Technology)",
                "B.Sc ( Welding Technology)",
                "B.Sc ( Manufacuring Technology)",
                "B.Sc(Renewable Energy)",
                "B.Sc(Drone Technology)",
              ].map((item, index) => {
                return (
                  <li
                    className="list-disc popins text-zinc-900 text-[.9vw] px-5 mt-1 leading-relaxed"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 font-bold text-[#4F2376] text-2xl">
              <h1>FACULTY OF EDUCATION AND TRAINING</h1>
            </div>
            <div className="">
              {[
                "B.Ed",
                "Diploma in Guidance & Counseling in Education",
                "Diploma in ICT for Teachers",
                "Diploma in Advance Art & Technical Teaching Program",
                "Diploma in NTT",
                "Certificate in Nursery Teacher Training Program",
              ].map((item, index) => {
                return (
                  <li
                    className="list-disc popins text-zinc-900 text-[.9vw] px-5 mt-1 leading-relaxed"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 font-bold text-[#4F2376] text-2xl">
              <h1>FACULTY OF SCIENCE</h1>
            </div>
            <div className="">
              {[
                "B.Sc (PCM/BCZ) Applied Sciences",
                "B.Sc (Statistics)",
                "B.Sc (Environment Science)",
                "B.Sc (Micro Biology)",
                "B.Sc (Bio Technology)",
                "B.Sc (Geo Informatic)",
                "B.Sc (Food & Nutrition)",
                "B.Voc (Life Science)",
                "M.Sc (Maths/ Physics/ Chemistry/Botany / Zoology)",
                "M.Sc (Environmental Science/Food & Nutrition/ Micro Biology/ Bio Technology)",
              ].map((item, index) => {
                return (
                  <li
                    className="list-disc popins text-zinc-900 text-[.9vw] px-5 mt-1 leading-relaxed"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Courses;
