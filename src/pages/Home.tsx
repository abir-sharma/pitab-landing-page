import { useState } from 'react'
import Banner1 from '../components/Banner1'
import Banner2 from '../components/Banner2'
import Banner3 from '../components/Banner3'
import FaqSection from '../components/FaqSection'
import Header from '../components/Header'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

const Home = () => {
  const [isCJ, setIsCJ] = useState(true)
  return (
    <div>
      <Header />
      <Banner1 isCJ={isCJ} />
      <Banner2 isCJ={isCJ} setIsCJ={setIsCJ} />
      <Banner3 />
      <TestimonialsCarousel />
      <FaqSection />
    </div>
  )
}

export default Home