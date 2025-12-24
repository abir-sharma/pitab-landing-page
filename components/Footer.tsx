import Image from 'next/image'
import { pi, fb, insta, utube, linkedin, twitter, telegram } from "@/Assets"
const Footer = () => {
    return (
        <>
            <div className='px-5 sm:px-12 lg:hidden flex flex-col gap-4 bg-[#F8F8F8] pt-4 pb-6'>
                <Image src={pi} alt="Pi Logo" />
                <p>We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.</p>
                <div>
                    <p className='font-semibold'>Let’s get social</p>
                    <div className='flex gap-3 items-center mt-2'>
                        <Image src={fb} alt="" />
                        <Image src={insta} alt="" />
                        <Image src={utube} alt="" />
                        <Image src={linkedin} alt="" />
                        <Image src={twitter} alt="" />
                        <Image src={telegram} alt="" />
                    </div>
                </div>

                <div className='flex w-full text-[#757575]'>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Careers</p>
                        <p>Privacy Policy</p>
                        <p>Contact us</p>
                        <p>Blogs</p>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <p>New Delhi</p>
                        <p>Patna</p>
                        <p>Kota</p>
                        <p>Noida</p>
                        <p>Dhanbad</p>
                        <p>Varanasi</p>
                    </div>
                </div>
            </div>

            <div className='px-5 sm:px-12 hidden lg:flex flex-row gap-4 bg-[#F8F8F8] pt-8 pb-10'>
                <div className='w-1/2 mr-4'>
                    <Image src={pi} alt="Pi Logo" />
                    <p className='mt-2'>We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.</p>
                    <div className='flex gap-3 items-center mt-8'>
                        <Image src={fb} alt="" />
                        <Image src={insta} alt="" />
                        <Image src={utube} alt="" />
                        <Image src={linkedin} alt="" />
                        <Image src={twitter} alt="" />
                        <Image src={telegram} alt="" />
                    </div>
                </div>

                <div className='flex w-full text-[#757575]'>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Careers</p>
                        <p>Privacy Policy</p>
                        <p>Contact us</p>
                        <p>Blogs</p>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <p>New Delhi</p>
                        <p>Patna</p>
                        <p>Kota</p>
                        <p>Noida</p>
                        <p>Dhanbad</p>
                        <p>Varanasi</p>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <p>IIT JEE</p>
                        <p>NEET</p>
                        <p>GATE</p>
                        <p>NDA</p>
                        <p>UPSC</p>
                        <p>School Prep</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer