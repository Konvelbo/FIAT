'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obj = { val: 0 }

    const anim = gsap.to(obj, {
      val: end,
      duration,
      ease: 'power2.out',
      onUpdate: () => setDisplayed(Math.round(obj.val)),
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        once: true,
      },
    })

    return () => {
      anim.kill()
    }
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{displayed}{suffix}
    </span>
  )
}
