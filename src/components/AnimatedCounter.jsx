import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // Parse the numeric part
    const numericStr = value.replace(/[^0-9.]/g, '')
    const target = parseFloat(numericStr) || 0
    const hasPlus = value.includes('+')
    const isDecimal = numericStr.includes('.')

    const startTime = performance.now()

    function animate(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased

      if (isDecimal) {
        setDisplay(current.toFixed(1))
      } else {
        setDisplay(Math.floor(current).toString())
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Final value with suffix
        setDisplay(isDecimal ? target.toFixed(1) : target.toString())
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  const hasPlus = value.includes('+')

  return (
    <span ref={ref}>
      {display}{hasPlus ? '+' : ''}{suffix}
    </span>
  )
}
