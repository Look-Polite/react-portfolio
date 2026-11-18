import { useEffect, useState } from 'react'
import  WeatherWidget  from './sections/weatherWidget'
import "./App.css"
import Hero from "./sections/hero"
import About from "./sections/about"
import Projects from "./sections/projects"
import Skills from "./sections/skills"
import Cats from "./sections/cats"


export default function App() {

    useEffect(() => {
        const reveal = document.getElementById("follower");
        if (!reveal) return;

        const handleMouseMove = (e: MouseEvent) => {
            reveal.style.setProperty("--x", e.clientX + "px");
            reveal.style.setProperty("--y", e.clientY + "px");
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);
  return(
    <>
    <link rel="icon" type="image/png" href="public/websiteIcon.png"></link>
    <div className="follower" id="follower"></div>
    <div>
      <div className="topnav">
        <div className="logoWrapper"><a href="#top" className="logo1"><img src="public/logo1.png" className="logo1"/></a></div>
        <WeatherWidget />
      </div>
      <section id="top"></section>
      <div>
        <Hero />
        <div className='splitter'></div>
        <About />
        <div className='splitter'></div>
        <section id="projects"></section>
        <Projects />
        <Skills />
        <Cats />
        <br />

      </div>
    </div>
    </>
  )
}
