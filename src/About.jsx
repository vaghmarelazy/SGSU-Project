import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function About() {
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
    <div id="intro-slider" className="flex flex-col item-center justify-center mt-[10vh] mb-[10vh]">
      <div className=" flex flex-col items-center justify-center bgs">
        <h1 className="about text-[3vw] bold underline">About SGSU</h1>
        <div className="text flex text-zinc-600 gap-5 w-[60%] text-center flex-col mt-[2vw] popins ">
          <p ref={trigger1Ref}>
            SCOPE Global Skills University (SGSU) is Central India's first NEP
            and NSQF-aligned skills university in Bhopal, Madhya Pradesh, India.
            Established in 2023 under the UGC 2(F) Act, it is a part of the
            AISECT Group, a leading education and skill development organisation
            in India. SGSU will create industry-ready professionals by training
            students on industry-relevant skills with the help of industry
            experts at industry-grade labs and by providing practical industry
            exposure through internships and apprenticeships.
          </p>
          <p ref={trigger2Ref}>SGSU is accredited by the University Grants Commission (UGC) and offers undergraduate, postgraduate, and doctoral programmes across a wide range of faculties, including Engineering & Technology Skills, Emerging Technologies, Information Technology and Future Skills, Management Studies, Banking, Finance & Commerce, Education & Training, Fashion Technology & Interior Design, Medical & Allied Sciences, Agriculture & Allied Technologies, Mass Communication, Humanities & Liberal Arts, and Sustainable Development Studies.</p>
        </div>
      </div>
      <div className="scpimg h-[80vh] overflow-hidden flex items-center justify-center">
        <div className="w-full h-full"></div>
        <img
          className="object-cover object-center"
          src="https://sgsuniversity.ac.in/wp-content/uploads/2023/07/sgsu-building.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
