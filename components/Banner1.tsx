import Image from "next/image"
import Button from "./ui/Button"
import { banner1Bg, banner1Image } from "@/Assets"

const Banner1 = () => {
    return (
        <>
            <div className="flex lg:hidden flex-col px-5 justify-center items-center gap-4 pt-24 bg-linear-to-b from-[#FF996B] to-white">
                <Image src={banner1Image} alt="pitab" />
                <p className="text-4xl font-bold text-center">A Smarter, Safer Learning Tablet For Your Child</p>
                <p className="text-center">Experience a new era of education with our learning-focused OS, robust parental safety features, and the powerful performance of Samsung</p>
                <Button text="Order Now | Starting from ₹14,999" />
            </div>

            <div className="w-full hidden lg:flex relative pt-24 px-24 overflow-hidden  bg-linear-to-b from-[#FF996B]  to-white">
                <div className="w-full h-full flex overflow-hidden absolute left-0 z-0">
                    <Image src={banner1Bg} alt="pitab" />
                    <Image src={banner1Bg} alt="pitab" />

                </div>

                <div className="w-1/2  z-10 px-12 flex items-center justify-center">
                    <div className="flex flex-col gap-4">
                        <p className="text-7xl font-semibold">A Smarter, Safer Learning Tablet For Your Child</p>
                        <p className="w-96">Experience a new era of education with our learning-focused OS, robust parental safety features, and the powerful performance of Samsung</p>
                        <div className="w-96"><Button text="Order Now | Starting from ₹14,999" /></div>
                    </div>
                </div>
                <div className="w-1/2  z-10 flex items-center justify-center ">
                    <Image className="w-[600px] h-[600px]" src={banner1Image} alt="pitab" />
                </div>
            </div>
        </>
    )
}

export default Banner1