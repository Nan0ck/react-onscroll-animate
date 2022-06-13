import React, { useEffect, useRef } from 'react'
import { getScrollPercent } from '../utils/getScrollPercent'

interface animationProps {
  elementRef: HTMLDivElement
  origin: [number, number]
  values: [number, number]
  startAndEnd: [number, number]
}

const scaleScrollAnimation = ({
  elementRef,
  values,
  origin,
  startAndEnd
}: animationProps) => {
  const [start, end] = startAndEnd
  const [originX, originY] = origin
  const [x, y] = values
  elementRef.style.transformOrigin = `${originX}% ${originY}%`
  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(() => {
      const scrollPercent = getScrollPercent()
      if (scrollPercent <= start) {
        elementRef.style.transform = 'scale3d(1,1,1)'
      } else if (scrollPercent > end) {
        elementRef.style.transform = `scale3d(${1 + x},${1 + y},1)`
      } else {
        const elementRealScrolled = scrollPercent - start
        const elementScrolledPercent = elementRealScrolled / (end - start)
        elementRef.style.transform = `scale3d(${
          1 + x * elementScrolledPercent
        },${1 + y * elementScrolledPercent},1)`
      }
    })
  })
}
interface Props {
  children?: React.ReactNode
  origin: [number, number]
  values: [number, number]
  startAndEnd: [number, number]
}
export const Scale = ({ children, startAndEnd, values, origin }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (wrapperRef.current) {
      scaleScrollAnimation({
        elementRef: wrapperRef.current,
        startAndEnd,
        values,
        origin
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
