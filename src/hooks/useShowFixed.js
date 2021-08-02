import { useEffect, useState } from 'react'

export const useShowFixed = () => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const isShowFixed = window.scrollY > 600
      setShowFixed(isShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return { showFixed }
}