import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function Relations() {
  const trigger1Ref = useRef(null);
  const trigger2Ref = useRef(null);

  useLayoutEffect(() => {
    const trigger1 = trigger1Ref.current;
    const trigger2 = trigger2Ref.current;

    // Initial state: set opacity to 0 and top to 50%
    gsap.set([trigger1, trigger2], { opacity: 0, top: "75%" });

    // Animation timeline for trigger1
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: trigger1,
        start: "center bottom-=25%", // Trigger animation when element reaches the 75% mark of the viewport
        toggleActions: "play none none none", // Play animation once and don't reverse
      },
    });

    tl1.to(trigger1, {
      opacity: 1,
      top: "0",
      duration: 1,
    });

    // Animation timeline for trigger2
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: trigger2,
        start: "center bottom-=25%", // Trigger animation when element reaches the 75% mark of the viewport
        toggleActions: "play none none none", // Play animation once and don't reverse
      },
    });

    tl2.to(trigger2, {
      opacity: 1,
      top: "0",
      duration: 1,
    });
  }, []);
  return (
    <div className="mt-[10vh] w-full h-[60vh]">
      <div className="relations px-20  flex flex-col items-center justify-center">
        <h1 className=" font-bold  uppercase text-3xl text-[#4F2376] mb-[2vh]">
          Strong industry Partners
        </h1>
        <p
          ref={trigger1Ref}
          className="mt-[2vh] popins w-[60%] text-center text-zinc-600"
        >
          Scope Global Skill University (SGSU) establishes strong partnerships
          with industry leaders and employers, providing students with
          opportunities for internships, networking, and job placement after
          graduation.
        </p>
        <p
          ref={trigger2Ref}
          className="mt-[2vh] popins w-[60%] text-center text-zinc-600"
        >
          These collaborations will enrich the educational ecosystem, allowing
          students to access a diverse range of academic resources and global
          perspectives. Through these strategic alliances, SGSU promotes
          cross-cultural exchanges, collaborative research initiatives, and
          joint programmes that empower our students to thrive in an
          interconnected world.
        </p>
      </div>
      <div className="flex gap-5 w-full items-center justify-center ">
        <div className="img flex mx-auto mt-[5vh] overflow-hidden">
          <div className="comp-pc flex m-[2vw] gap-[2vw] items-center justify-center filter grayscale whitespace-nowrap overflow-hidden">
            <img
              src="https://logos-download.com/wp-content/uploads/2017/05/Airtel_logo-700x216-450x139.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2022/12/NIIT_Technologies_Logo-450x261.png"
              alt=""
            />
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/tcs.png"
              alt=""
            />
            <img
              src="https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo-640x400.png"
              alt=""
            />
            <img
              className=""
              src="https://assets.aboutamazon.com/dims4/default/c1f10ce/2147483647/strip/true/crop/1200x800+0+0/resize/324x216!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F75%2Fab%2F53dea402445d83406077763cfde7%2Famazon-logo-1200x800.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2021/01/JustDial_Logo-700x180.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bajaj_Finserv_Logo.svg/768px-Bajaj_Finserv_Logo.svg.png"
              alt=""
            />
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/1673077509.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2021/01/Paytm_Logo-700x220.png"
              alt=""
            />
            <img
              src="https://www.carlogos.org/logo/Tata-logo-2000-2560x1440.png"
              alt=""
            />
          </div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration:20, repeat:Infinity, ease:"linear",  }}
            className="company-logo flex m-[2vw] gap-[2vw] items-center justify-center filter grayscale"
          >
            <img
              src="https://logos-download.com/wp-content/uploads/2017/05/Airtel_logo-700x216-450x139.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2022/12/NIIT_Technologies_Logo-450x261.png"
              alt=""
            />
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/tcs.png"
              alt=""
            />
            <img
              src="https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo-640x400.png"
              alt=""
            />
            <img
              className=""
              src="https://assets.aboutamazon.com/dims4/default/c1f10ce/2147483647/strip/true/crop/1200x800+0+0/resize/324x216!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F75%2Fab%2F53dea402445d83406077763cfde7%2Famazon-logo-1200x800.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2021/01/JustDial_Logo-700x180.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bajaj_Finserv_Logo.svg/768px-Bajaj_Finserv_Logo.svg.png"
              alt=""
            />
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/1673077509.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2021/01/Paytm_Logo-700x220.png"
              alt=""
            />
            <img
              src="https://www.carlogos.org/logo/Tata-logo-2000-2560x1440.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2017/05/Airtel_logo-700x216-450x139.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2022/12/NIIT_Technologies_Logo-450x261.png"
              alt=""
            />
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/tcs.png"
              alt=""
            />
            <img
              src="https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo-640x400.png"
              alt=""
            />
            <img
              className=""
              src="https://assets.aboutamazon.com/dims4/default/c1f10ce/2147483647/strip/true/crop/1200x800+0+0/resize/324x216!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F75%2Fab%2F53dea402445d83406077763cfde7%2Famazon-logo-1200x800.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2021/01/JustDial_Logo-700x180.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bajaj_Finserv_Logo.svg/768px-Bajaj_Finserv_Logo.svg.png"
              alt=""
            />
            <img
              src="https://sgsuniversity.ac.in/wp-content/uploads/2023/05/1673077509.png"
              alt=""
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2021/01/Paytm_Logo-700x220.png"
              alt=""
            />
            <img
              src="https://www.carlogos.org/logo/Tata-logo-2000-2560x1440.png"
              alt=""
            />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

export default Relations;
