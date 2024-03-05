import React, { useEffect, useState } from "react";
import Logo from "./SCOPE.png";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handlSwipe = (e) => {
      if (e.deltaY > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("wheel", handlSwipe);

    return () => {
      window.removeEventListener("wheel", handlSwipe);
    };
  }, []);
  return (
    <div
      style={{
        top: isVisible ? "-100%" : "0",
        position: "fixed",
        boxSizing: "border-box",
        zIndex: 999,
        width: "100vw",
        transition: " top .3s ease-in-out",
        backdropFilter: isVisible ? "none" : "blur(5px)",
      }}
    >
      <div className="flex relative justify-between py-5 px-[5vw] items-center">
        <a
          href="https://sgsuniversity.ac.in/"
          target="_blank"
          className=" cursor-pointer"
        >
          <img className="w-[15vw] navlogo" src={Logo} alt="" />
        </a>
        <div className="burgur">
          <RxHamburgerMenu />
        </div>
        <div className="navelements flex gap-8">
          {["Home", "About us", "Admission", "News", "Contact us"].map(
            (item, index) => (
              <h2 className="navs w-[6vw] font-semibold cursor-pointer popins text-zinc-800 sm:">
                {item}
              </h2>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
