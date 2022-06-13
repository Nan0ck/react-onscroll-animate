import React, { useEffect, useRef } from 'react'
import { getScrollPercent } from '../utils/getScrollPercent'

interface animationProps {
  elementRef: HTMLDivElement
  x: number
  startAndEnd: [number, number]
}

const translateXAnimation = ({
  elementRef,
  x,
  startAndEnd
}: animationProps) => {
  const [start, end] = startAndEnd

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(() => {
      const scrollPercent = getScrollPercent()
      if (scrollPercent <= start) {
        elementRef.style.transform = 'translateX(0%) '
      } else if (scrollPercent > end) {
        elementRef.style.transform = `translateX(${x}%) `
      } else {
        const elementRealScrolled = scrollPercent - start
        const elementScrolledPercent = elementRealScrolled / (end - start)
        elementRef.style.transform = `translateX(${
          x * elementScrolledPercent
        }%) `
      }
    })
  })
}
interface Props {
  children?: React.ReactNode
  startAndEnd: [number, number]
  x: number
}

/**
 * @prop children children to be wrapped by the animation component
 * @prop startAndEnd scroll percentage range, ex:[0,20] from 0 to 20% of scroll 
 * @prop x pixel value  
 */
export const TranslateX = ({ children, startAndEnd, x }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (wrapperRef.current) {
      translateXAnimation({
        elementRef: wrapperRef.current,
        x,
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
