import React, { useEffect, useRef } from 'react'
import { getScrollPercent } from '../utils/getScrollPercent'

interface animationProps {
  elementRef: HTMLDivElement
  y: number
  startAndEnd: [number, number]
}

const translateYAnimation = ({
  elementRef,
  y,
  startAndEnd
}: animationProps) => {
  const [start, end] = startAndEnd

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(() => {
      const scrollPercent = getScrollPercent()
      if (scrollPercent <= start) {
        elementRef.style.transform = 'translateY(0%) '
      } else if (scrollPercent > end) {
        elementRef.style.transform = `translateY(${y}%) `
      } else {
        const elementRealScrolled = scrollPercent - start
        const elementScrolledPercent = elementRealScrolled / (end - start)
        elementRef.style.transform = `translateY(${
          y * elementScrolledPercent
        }%) `
      }
    })
  })
}
interface Props {
  children?: React.ReactNode
  startAndEnd: [number, number]
  y: number
}

/**
 * @prop children children to be wrapped by the animation component
 * @prop startAndEnd scroll percentage range, ex:[0,20] from 0 to 20% of scroll 
 * @prop y pixel value  
 */
export const TranslateY = ({ children, startAndEnd, y }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (wrapperRef.current) {
      translateYAnimation({
        elementRef: wrapperRef.current,
        y,
        startAndEnd
      })
    }
  }, [])
  return (
    <div
      ref={wrapperRef}
      style={{ width: 'auto', height: 'auto', position: 'fixed' }}
    >
      {children}
    </div>
  )
}
