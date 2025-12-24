import { mdm } from "@/Assets"
import Image from "next/image"


const MdmBanner = () => {
    return (
        <div className="w-full flex flex-col px-5 items-center justify-center gap-8">
            <div>
                <p className="text-2xl lg:text-4xl font-bold text-center text-[#3C3C3C]">MDM Parental Control App</p>
                <p className="text-sm lg:text-lg text-center">Allows parents to manage screen time, control app access, and ensure responsible device usage</p>
            </div>

            {/* <div className="w-full border-2"> */}
            <Image className="flex lg:hidden" src={mdm} alt="mdm" />
            <Image className="w-250 h-137.5 hidden lg:flex" src={mdm} alt="mdm" />

            {/* </div> */}
            <div className="px-4 flex flex-col lg:hidden">
                <li>Parents can lock entertainment apps during study hours and set daily screen time limits. </li>
                <li>From their phone, they can view weekly learning reports.</li>
                <li>Student can easily monitor their tablet usage to optimise their studies.</li>
            </div>

            <ul className="px-4 text-center space-y-3 hidden lg:flex lg:flex-col">
                <li className="flex justify-center items-center  gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                    <span className="text-lg">Parents can lock entertainment apps during study hours and set daily screen time limits.</span>
                </li>

                <li className="flex justify-center items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                    <span className="text-lg">From their phone, they can view weekly learning reports.</span>
                </li>

                <li className="flex justify-center items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0"></span>
                    <span className="text-lg">Student can easily monitor their tablet usage to optimise their studies.</span>
                </li>
            </ul>


        </div>
    )
}

export default MdmBanner