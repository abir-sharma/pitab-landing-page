import { daily, homework, interactive, tailored, twoTeacher } from "@/Assets"
import Image from "next/image"
import FeaturesSection from "./FeaturesSection"

const Banner4 = () => {
    return (
        <div className="px-5 flex flex-col items-center ">
            <p className="text-2xl lg:text-4xl font-semibold text-[#3C3C3C]">More than a Tablet</p>
            <p className="text-center text-sm mt-2 lg:text-lg">Includes the Curious Jr. learning program, ready from day one</p>
            <div className="mt-28 flex lg:hidden flex-col items-center gap-20">
                <div className="bg-[#FFF2E1] rounded-2xl flex flex-col items-center">
                    <div className="relative w-full h-28">
                        <Image className="absolute -top-12 left-1/2 -translate-x-1/2" src={interactive} alt="interactive" />

                    </div>
                    <p className="font-semibold text-lg mb-2">Interactive Live Classes</p>
                    <p className="text-sm w-full px-6 text-center pb-6">Interactive elements, engaging animations, and badges for learning fun and effective</p>
                </div>

                <div className="bg-[#FFFFDD] rounded-2xl flex flex-col items-center">
                    <div className="relative w-full h-28">
                        <Image className="absolute -top-12 left-1/2 -translate-x-1/2" src={homework} alt="interactive" />

                    </div>
                    <p className="font-semibold text-lg mb-2">Homework Assistance</p>
                    <p className="text-sm w-full px-6 text-center pb-6">No more homework struggles! Get real-time homework support from our Mentors</p>
                </div>

                <div className="bg-[#E5FFE9] rounded-2xl flex flex-col items-center">
                    <div className="relative w-full h-28">
                        <Image className="absolute -top-12 left-1/2 -translate-x-1/2" src={twoTeacher} alt="interactive" />

                    </div>
                    <p className="font-semibold text-lg mb-2">The Two-Teacher Model</p>
                    <p className="text-sm w-full px-6 text-center pb-6">A dedicated educator for quality teaching & a personal mentor to guide your child</p>
                </div>

                <div className="bg-[#EAF7FF] rounded-2xl flex flex-col items-center">
                    <div className="relative w-full h-28">
                        <Image className="absolute -top-12 left-1/2 -translate-x-1/2" src={tailored} alt="interactive" />

                    </div>
                    <p className="font-semibold text-lg mb-2">Tailored Practice Solutions</p>
                    <p className="text-sm w-full px-6 text-center pb-6">Practice exercises designed to reinforce concepts & help in your child's learning</p>
                </div>

                <div className="bg-[#FFF2CF] rounded-2xl flex flex-col items-center">
                    <div className="relative w-full h-28">
                        <Image
                            src={daily}
                            alt="interactive"
                            className="absolute -top-12 left-1/2 -translate-x-1/2"
                        />
                    </div>

                    <p className="font-semibold text-lg mb-2">
                        Daily Performance Tracking
                    </p>

                    <p className="text-sm w-full px-6 text-center pb-6">
                        Stay connected with your child's learning journey through our progress reports
                    </p>
                </div>

            </div>
            
            <div className="hidden lg:flex mt-12">
                <FeaturesSection />
            </div>


        </div>
    )
}

export default Banner4