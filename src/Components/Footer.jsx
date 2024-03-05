import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsLinkedin,
  BsPrinterFill,
  BsTwitter,
  BsX,
} from "react-icons/bs";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div className="foot w-full h-[60vh] bg-[#1c1d31]">
      <div className="containerf px-36 py-16 gap-8 w-full h-[80%] flex border-b-[1px] border-white">
        <div className="w-1/3 h-[40%] footcont ">
          <div className="flex flex-col justify-start items-center">
            <div className="w-full">
              <h1 className="text-[1.5vw] text-white font-bold foothead ">ABOUT SGSU</h1>
            </div>
            <p className="text-zinc-400 text-[14px] pt-[2vw] footdata">
              Scope Global skills University (SGSU) has been established vide an
              act of Madhya Pradesh Assembly in January,2023 with the objective
              of “Education with Skill” and aims at making youth of country
              “Skill Smart”.
            </p>
          </div>
        </div>
        <div className="w-1/3 h-[40%] footcont">
          <div className="w-full">
            <h1 className="text-[1.5vw] text-white font-bold foothead">QUICK LINKS</h1>
            <ul className="links pt-[2vw] px-4 flex flex-col text-zinc-400 text-[14px] footdata">
              <li>
                <IoIosArrowForward />
                About
              </li>
              <li>
                <IoIosArrowForward />
                Admission
              </li>
              <li>
                <IoIosArrowForward />
                Carrer
              </li>
              <li>
                <IoIosArrowForward />
                Contact
              </li>
              <li>
                <IoIosArrowForward />
                Enquire now
              </li>
              <li>
                <IoIosArrowForward />
                News & Events
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 h-[40%] footcont">
          <div className="w-full ">
            <h1 className="text-white text-[1.5vw] font-bold foothead">OUR CAMPUS</h1>
          </div>
          <div className="text-zinc-400 flex pt-[2vw] gap-5 w-[60%] items-center capm footdata">
            <div className="text-[1vw]">
              <ImLocation2 />
            </div>
            <h2 className="text-[14px]">
              Scope Campus, NH-12, Near Misrod, Hoshangabad Road, Bhopal
            </h2>
          </div>
          <div className="text-zinc-400 pt-1 flex gap-5 w-[60%] items-center capm footdata">
            <div className="text-[1vw]">
              <BsFillTelephoneFill />
            </div>
            <h2 className="text-[14px]">Tel.: +91-7552432904/905</h2>
          </div>
          <div className="text-zinc-400 pt-1 flex gap-5 w-[60%] items-center capm footdata">
            <div className="text-[1vw]">
              <BsPrinterFill />
            </div>
            <h2 className="text-[14px]">Fax: +91-7552432909</h2>
          </div>
          <div className="text-zinc-400 pt-1 flex gap-5 w-[60%] items-center capm footdata">
            <div className="text-[1vw]">
              <IoMdMail />
            </div>
            <h2 className="text-[14px]">info@sgsuniversity.ac.in</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-[20%] text-white flex items-center justify-between px-36 voo">
        <h1 className="flex">
          Copyright © 2023{" "}
          <a className="underline" href="">
            SGSU
          </a>
          <a href="https://www.instagram.com/lazy_developer/"  target="_blank">. X Lazy</a>
        </h1>
        <div className="flex gap-5 text-[1.8vw]">
          <div class="icon bynumberd1">
            <BsFacebook />
          </div>
          <div class="icon bynumberd2">
            <BsLinkedin />
          </div>
          <div class="icon bynumberd3">
            <FaXTwitter />
          </div>
          <div class="icon bynumberd4">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
