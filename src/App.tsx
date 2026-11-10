import { useEffect, useState } from 'react'
import  WeatherWidget  from './weatherWidget'

export default function App() {
  return(
    <div>
      <div className="topnav">
        <WeatherWidget />
      </div>
    </div>
  )
}
