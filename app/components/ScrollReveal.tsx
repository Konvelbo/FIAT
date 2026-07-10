'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  distance?: number
  stagger?: number
  triggerStart?: string
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  stagger = 0,
  triggerStart = 'top 88%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger > 0 ? Array.from(el.children) : [el]

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: 'power3.out',
    }

    if (direction === 'up')    fromVars.y = distance
    if (direction === 'down')  fromVars.y = -distance
    if (direction === 'left')  fromVars.x = distance
    if (direction === 'right') fromVars.x = -distance

    const anim = gsap.from(targets, {
      ...fromVars,
      stagger: stagger || 0,
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        once: true,
      },
    })

    return () => {
      anim.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [direction, delay, duration, distance, stagger, triggerStart])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
