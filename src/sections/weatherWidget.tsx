import { useWeather } from '../useWeather'
import { useEffect, useState } from 'react'
import descriptions from '../descriptions.json'
import {useCityName} from '../useCityName'
import './weatherWidget.css'


function WeatherWidget(){
    const [lat, setLat] = useState<number | null>(null)
    const [lon, setLon] = useState<number | null>(null)

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      },
      (error) => {
        console.error('Location error:', error.message)
      }
    )
  }
    useEffect(() => {
    getLocation()
  }, [])

    const { location: cityResult, loadingCity, errorCity}  = useCityName(
    lat ?? 0,
    lon ?? 0
  )
  const { weather, loadingWeather, errorWeather } = useWeather(
    lat ?? 0,
    lon ?? 0
  )
//test portion here other side of world
  // const { weather, loadingWeather, errorWeather } = useWeather(
  //   33,
  //   -28
  // )
  // const { location: cityResult, loadingCity, errorCity}  = useCityName(
  //   33,
  //   -28
  // )
    

    if (lat === null || lon === null) {
    return <div className="weather-card"><div className="loading">Getting location...</div></div>
  }

    if (loadingWeather) return <div className="weather-card"><div className="loading">Loading weather...</div></div>
  if (errorWeather) return <div>Weather unavailable</div>
  if (!weather) return null
  if (loadingCity) return <div className="weather-card"><div className="loading">Loading city...</div></div>

    const weatherInfo = descriptions[
        String(weather.weather) as keyof typeof descriptions
    ]

    const timeOfDay = weather.isDay ? "day" : "night"

    const description = weatherInfo?.[timeOfDay]?.description ?? 'Unknown'

    const image = weatherInfo?.[timeOfDay]?.image


  return (
    <div className="weather-card">
      {image && (
        <img src={image} alt={description} />
      )}
      <h2>{weather.temp}°C</h2>
      <div className="city">{cityResult?.city} </div>
      <div className="country">{cityResult?.country}</div>
    </div>
  )

}

export default WeatherWidget