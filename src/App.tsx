import { useEffect, useState } from 'react'
import  WeatherWidget  from './sections/weatherWidget'
import "./App.css"
import Hero from "./sections/hero"
export default function App() {
  return(
    <>
    <link rel="icon" type="image/png" href="public/websiteIcon.png"></link>
    <div>
      <div className="topnav">
        <div className="logoWrapper"><a href="#top" className="logo1"><img src="public/logo1.png" className="logo1"/></a></div>
        <WeatherWidget />
      </div>
      <div>
        <Hero />
      </div>
    </div>
    </>
  )
}
