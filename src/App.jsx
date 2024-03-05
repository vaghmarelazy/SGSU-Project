import React, { useEffect, useState } from "react";
import Preloader from "./Essentials/Preloader";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Stat from "./Stat";
import About from "./About";
import Relations from "./Components/Relations";
import Clg from "./Components/Clg";
import Courses from "./Components/Courses";
import AandA from "./Components/AandA";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Curser from "./Essentials/Curser";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [loading,setLoading] = useState (true);

  useEffect(()=>{
    const timout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return()=>{
      clearTimeout(timout);
    }
  })
  return (
    <div className="w-full min-h-screen bg-zinc-200">
      {loading ? <Preloader/> :(
        <>
        
        <Nav />
        <Hero />
        <About />
        <Stat/>
        <Relations/>
        <Clg/>
        <Courses/>
        <AandA/>
        <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
