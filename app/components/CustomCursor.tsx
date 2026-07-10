'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    // Ensure we only run this on devices with a fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      cursor.style.display = 'none'
      follower.style.display = 'none'
      return
    }

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' })
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power4.out' })
    }

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.2 })
      gsap.to(follower, { scale: 1.5, backgroundColor: 'rgba(201, 162, 39, 0.1)', borderColor: 'rgba(201, 162, 39, 0.5)', duration: 0.2 })
    }

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 })
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(201, 162, 39, 0.3)', duration: 0.2 })
    }

    window.addEventListener('mousemove', onMouseMove)

    // Add hover effect to all clickable elements
    const clickables = document.querySelectorAll('a, button, input, select, textarea, .service-card, .partner-card, .stat-card')
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    // Setup mutation observer to attach events to newly added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              const el = node as HTMLElement
              if (el.matches && el.matches('a, button, input, select, textarea, .service-card, .partner-card, .stat-card')) {
                el.addEventListener('mouseenter', onMouseEnter)
                el.addEventListener('mouseleave', onMouseLeave)
              }
              const children = el.querySelectorAll ? el.querySelectorAll('a, button, input, select, textarea, .service-card, .partner-card, .stat-card') : []
              children.forEach((child) => {
                child.addEventListener('mouseenter', onMouseEnter)
                child.addEventListener('mouseleave', onMouseLeave)
              })
            }
          })
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--fiat-gold)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
        className="hide-mobile"
      />
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          border: '1px solid rgba(201, 162, 39, 0.3)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'background-color 0.2s, border-color 0.2s',
        }}
        className="hide-mobile"
      />
    </>
  )
}
