import { useEffect, useState } from 'react'

type Weather = {
  temp: number
  isDay: boolean
  weather: string
}

export function useWeather(lat: number, lon: number) {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [loadingWeather, setLoading] = useState(true)
  const [errorWeather, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    setWeather(null)

    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,apparent_temperature,weather_code,is_day` +
      `&timezone=auto`

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((json) => {
        const c = json?.current
        if (typeof c?.temperature_2m !== 'number') {
          throw new Error('Unexpected response shape')
        }
        setWeather({
          temp: Math.round(c.temperature_2m),
          isDay: c.is_day === 1,
          weather: (c.weather_code),
        })
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        console.error('useWeather failed:', err)
        setError(err)
        setLoading(false)
      })

    return () => controller.abort()
  }, [lat, lon])

  return { weather, loadingWeather, errorWeather }
}