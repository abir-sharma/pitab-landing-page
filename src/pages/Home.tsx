// import { useState } from 'react'
// import Banner1 from '../components/Banner1'
// import Banner2 from '../components/Banner2'
// import Banner3 from '../components/Banner3'
// import FaqSection from '../components/FaqSection'
// import Header from '../components/Header'
// import TestimonialsCarousel from '../components/TestimonialsCarousel'

// const Home = () => {
//   const [isCJ, setIsCJ] = useState(true)
//   return (
//     <div>
//       <Header />
//       <Banner1 isCJ={isCJ} />
//       <Banner2 isCJ={isCJ} setIsCJ={setIsCJ} />
//       <Banner3 />
//       <TestimonialsCarousel />
//       <FaqSection />
//     </div>
//   )
// }

// export default Home

import { useEffect, useRef, useState } from "react"
import Banner1 from '../components/Banner1'
import Banner2 from '../components/Banner2'
import Banner3 from '../components/Banner3'
import FaqSection from '../components/FaqSection'
import Header from '../components/Header'

const Home = () => {
  const [isCJ, setIsCJ] = useState(true)
  const [showCTA, setShowCTA] = useState(false)

  const banner2Ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!banner2Ref.current) return

      const banner2Top = banner2Ref.current.offsetTop
      const scrollPosition = window.scrollY

      if (scrollPosition > banner2Top) {
        setShowCTA(true)
      } else {
        setShowCTA(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // run once on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative pb-16 md:pb-0">
      <Header />
      <Banner1 isCJ={isCJ} />
      <Banner2 ref={banner2Ref} isCJ={isCJ} setIsCJ={setIsCJ} />
      <Banner3 />
      <FaqSection />

      {/* Mobile Fixed CTA */}
      {showCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-2 md:hidden bg-white">
          <button className="bg-[#1B2124] w-full flex items-center justify-center gap-2 text-white rounded-md px-6 py-3 shadow-lg">
            <span className="text-sm">Order Now</span>
            <span>|</span>
            <span className="text-xs opacity-90">Starting from</span>
            <span className="text-sm">₹14,999</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Home
