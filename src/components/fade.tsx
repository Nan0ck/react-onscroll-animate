import React, { useEffect, useRef } from 'react'
import { getScrollPercent } from '../utils/getScrollPercent'

interface animationProps {
  elementRef: HTMLDivElement
  startAndEnd: [number, number]
}

const fadeScrollAnimation = ({ elementRef, startAndEnd }: animationProps) => {
  const [start, end] = startAndEnd
  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(() => {
      const scrollPercent = getScrollPercent()
      if (scrollPercent < start) {
        elementRef.style.opacity = '1'
        elementRef.style.visibility = 'visible'
      } else if (scrollPercent > end) {
        elementRef.style.opacity = '0'
        elementRef.style.visibility = 'hidden'
      } else {
        const elementRealScrolled = scrollPercent - start
        const elementScrolledPercent = elementRealScrolled / (end - start)
        elementRef.style.opacity = `${1 - elementScrolledPercent}`
        elementRef.style.visibility = 'visible'
      }
    })
  })
}
interface Props {
  children?: React.ReactNode
  startAndEnd: [number, number]
}

/**
 * @prop children children to be wrapped by the animation component
 * @prop startAndEnd scroll percentage range, ex:[0,20] from 0 to 20% of scroll 
 */
export const Fade = ({ children, startAndEnd }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (wrapperRef.current) {
      fadeScrollAnimation({
        elementRef: wrapperRef.current,
        startAndEnd
      })
    }
  }, [])
  return (
    <div
      ref={wrapperRef}
      style={{ width: '100vw', height: '100vh', position: 'fixed' }}
    >
      {children}
    </div>
  )
}
