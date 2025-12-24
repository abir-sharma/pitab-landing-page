import Image from 'next/image'
import { Banner3Image, firstPin } from '@/Assets'
import FeatureCards from './FeatureCard'
import FeatureShowcase from './FeatureShowcase'
const Banner3 = () => {
  return (
    <>
    <div className='flex lg:hidden flex-col bg-[radial-gradient(circle_at_center,rgba(255,210,189,0.35)_0%,#FFFFFF_80%)] justify-center items-center gap-6 px-5'>
      <p className='text-center text-2xl font-semibold'>Everything Your Child Needs to Learn Better</p>
      <p className='w-full text-center'>AI homework help, interactive quizzes, daily challenges, and clear progress reports. All built into the Curious Jr tablet</p>

      <Image src={Banner3Image} alt="banner3 image" />
      <FeatureCards />
    </div>

    <div className='hidden lg:flex w-full' >
      <FeatureShowcase />
    </div>
    </>
  )
}

export default Banner3