import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function Clg() {
  const trigger1Ref = useRef(null);
  const trigger2Ref = useRef(null);

  useLayoutEffect(() => {
    const trigger1 = trigger1Ref.current;
    const trigger2 = trigger2Ref.current;

    // Initial state: set opacity to 0 and top to 50%
    gsap.set([trigger1, trigger2], { opacity: 0, top: "750%" });

    // Animation timeline for trigger1
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: trigger1,
        start: "center bottom-=25%", // Trigger animation when element reaches the 75% mark of the viewport
        toggleActions: "play none none none" // Play animation once and don't reverse
      }
    });

    tl1.to(trigger1, {
      opacity: 1,
      top: "0",
      duration: 1
    });

    // Animation timeline for trigger2
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: trigger2,
        start: "center bottom-=25%", // Trigger animation when element reaches the 75% mark of the viewport
        toggleActions: "play none none none" // Play animation once and don't reverse
      }
    });

    tl2.to(trigger2, {
      opacity: 1,
      top: "0",
      duration: 1
    });
  }, []);

  return (
    <div data-scroll data-scroll-speed="">
      <div className="clg w-full h-[90vh] flex flex-col items-center justify-center mt-[30vh]">
        <h1 className="head text-3xl font-bold text-[#4F2376] underline">
          STATE-OF-THE-ART INFRASTRUCTURE & FACILITIES
        </h1>
        <p ref={trigger1Ref} className="subtext popins text-zinc-600 w-[60%] text-center mt-[2vh]">
          SGSU offers state-of-the-art facilities and resources, such as
          advanced technology labs, specialised equipment, and industry-standard
          software, to provide students with the tools they need to succeed in
          their chosen field.
        </p>
        <p ref={trigger2Ref} className="subtext popins text-zinc-600 w-[60%] text-center mt-[2vh]">
          Experience unparalleled learning environments at SGSU, where
          state-of-the-art infrastructure and cutting-edge facilities converge
          to create a dynamic educational journey. Discover limitless
          possibilities in a space designed to inspire excellence at SGSU.
        </p>
        <div className="flex gap-10 mt-[10vh] clg-container">
          
          <div className="img-container w-[20vw] h-[50vh] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-red-500">
            <div className="h-[80%] w-full flex flex-col items-center justify-center">
              <img
                className=" object-cover w-full h-full"
                src="https://plus.unsplash.com/premium_photo-1691844988214-a1ec03082354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxjb2xsZWdlJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div className="bg-black text-white uppercase text-md font-bold h-[20%] flex  items-center justify-center w-full">
              <h1 className="subtext">student facilities</h1>
            </div>
          </div>
          <div className="img-container w-[20vw] h-[50vh] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-red-500">
            <div className="h-[80%] w-full flex flex-col items-center justify-center object-cover">
              <img
                className=" object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="bg-black text-white uppercase text-md font-bold h-[20%] flex  items-center justify-center w-full">
              <h1 className="subtext">campus facilities</h1>
            </div>
          </div>
        </div>
        <button className="readmebtn mt-[5vh] bg-orange-600 w-[8vw] py-2 rounded-full text-white font-bold uppercase text-md">Read More</button>
      </div>
    </div>
  );
}

export default Clg;
