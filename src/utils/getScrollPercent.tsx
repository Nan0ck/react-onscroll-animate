/**
 * returns the page scrolled percentage
 */
export function getScrollPercent() {
  const h: HTMLElement = document.documentElement
  const b: HTMLElement = document.body
  return (
    ((h.scrollTop || b.scrollTop) /
      ((h.scrollHeight || b.scrollHeight) - h.clientHeight)) *
    100
  )
}
