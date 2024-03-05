import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Curser() {
  const [circlePosition, setCirclePostion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCirclePosition = (e) => {
      setCirclePostion({
        x: e.clientX,
        y: e.clientY,
      });
    };
    document.addEventListener("mousemove", updateCirclePosition);

    return () => {
      document.removeEventListener("mousemove", updateCirclePosition);
    };
  });

  const variants= {
    default:{
      x: circlePosition.x,
      y: circlePosition.y
    }
  }
  return (
    <div className="fixed inset-0 cursor-none">
      <motion.div className="fixed w-8 h-8 bg-blue-500 top-0 left-0 rounded-full z-9999999"
      variants={variants}
      animate="default"
      ></motion.div>
    </div>
  );
}

export default Curser;
