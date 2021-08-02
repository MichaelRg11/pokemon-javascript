import { useEffect, useState, useRef } from 'react'

export default function useNearScreen() {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef(null)

  useEffect(() => {
    let observer
    const element = fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer = true
      } else {
        setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '200px'
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}