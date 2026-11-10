
import { useEffect, useState } from 'react'

type CityResult = {
  city: string
  country: string
}

export function useCityName(lat: number, lon: number) {
  const [location, setLocation] = useState<CityResult | null>(null)
  const [loadingCity, setLoading] = useState(true)
  const [errorCity, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchCity() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error('Failed to find city')
        }

        const data = await response.json()
        const address = data.address

        setLocation({
          city:
            address.city ||
            address.town ||
            address.village ||
            address.suburb ||
            'Unknown location',
          country: address.country || '',
        })
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchCity()

    return () => controller.abort()
  }, [lat, lon])

  return { location, loadingCity, errorCity }
}
