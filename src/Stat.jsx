import React, { useRef, useEffect } from 'react';

function Stat() {
  const counterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const finalNumber = parseInt(entry.target.dataset.finalNumber, 10);
          const duration = parseInt(entry.target.dataset.duration, 10);
          animateNumber(entry.target, finalNumber, duration); // Start the counting animation
          observer.unobserve(entry.target);
        }
      });
    });

    counterRefs.current.forEach(ref => observer.observe(ref));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div data-scroll data-scroll-speed=".1" className="flex items-center justify-center popins ">
      <div className="w-[80%] flex items-center justify-center flex-col statcontainer">
        <div className="w-full h-[40vh] flex stat ">
          <div className="w-1/3 h-full text-[#E4E4E7] first ">
            <div className="flex flex-col items-center justify-center bg-[#7E0487] w-full h-1/2 text-xl  ">
              <h1 ref={ref => counterRefs.current[0] = ref} data-final-number="38" data-duration="4000" className="text-5xl font-bold num">38</h1>
              <h1 className="text-xl">Years of Lagacy of Skill Education</h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#AA21EA] w-full h-1/2">
              <h1 className="text-5xl font-bold num">420+</h1>
              <h1 className="text-xl">Placement Partners</h1>
            </div>
          </div>
          <div className="w-1/3 h-full bg-[#FF6B00] text-[#E4E4E7] second ">
            <h1 className="text-3xl text-[#E4E4E7] p-5 uppercase text-center font-bold head">Industry-Driven Carriculum</h1>
            <h1 className="px-10 ">
            SGSU could offer an industry-driven curriculum, tailored to the needs of specific industries or sectors, providing students with the knowledge and skills that are most in demand in the job market.
            </h1>
          </div>
          <div className="w-1/3 h-full bg-blue-600 third">
            <div className="flex items-center justify-center bg-[#AA21EA] w-full h-1/2 text-[#E4E4E7] flex-col ">
              <h1 className="text-5xl font-bold num">28</h1>
              <h1 className="text-xl">Industry Partners for Skill Training</h1>
            </div>
            <div className="flex items-center justify-center bg-[#7E0487] w-full h-1/2 text-[#E4E4E7] flex-col">
              <h1 className="text-5xl font-bold num">51+</h1>
              <h1 className="text-xl">UGC Aprroved Skill Programs</h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Stat;

