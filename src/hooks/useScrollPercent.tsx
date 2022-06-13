import { useState, useEffect } from 'react'
import { getScrollPercent } from '../utils/getScrollPercent'

export const useScrollPercent = () => {
  const [scrollPercent, setScrollPercent] = useState(0)

  const eventFunction = () => {
    const percent = getScrollPercent()
    setScrollPercent(percent)
  }

  useEffect(() => {
    window.addEventListener('scroll', eventFunction)
    return () => {
      window.removeEventListener('scroll', eventFunction)
    }
  })
  return scrollPercent
}
