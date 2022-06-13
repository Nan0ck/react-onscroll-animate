import React, { useEffect, useRef } from 'react'
import { getScrollPercent } from '../utils/getScrollPercent'

interface animationProps {
  elementRef: HTMLDivElement
  startAndEnd: [number, number]
}
const showAnimation = ({ elementRef, startAndEnd }: animationProps) => {
  const [start, end] = startAndEnd
  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(() => {
      const scrollPercent = getScrollPercent()
      if (scrollPercent <= start) {
        elementRef.style.opacity = '0'
      } else if (scrollPercent > end) {
        elementRef.style.opacity = '1'
      } else {
        const elementRealScrolled = scrollPercent - start
        const elementScrolledPercent = elementRealScrolled / (end - start)
        elementRef.style.opacity = `${elementScrolledPercent}`
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
export const Show = ({ children, startAndEnd }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (wrapperRef.current) {
      showAnimation({
        elementRef: wrapperRef.current,
        startAndEnd
      })
    }
  }, [])
  return (
    <div
      ref={wrapperRef}
      style={{ width: '100vw', height: '100vh', position: 'fixed', opacity: 0 }}
    >
      {children}
    </div>
  )
}
