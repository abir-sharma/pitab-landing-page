import { check, uncheck } from "@/Assets"
import Image from "next/image"
const Banner2 = () => {
    return (
        <div className="w-full px-5 py-10">
            <p className="text-2xl lg:text-4xl text-[#3C3C3C] font-semibold text-center">
                Built for Learning. Not for Distractions
            </p>
            <p className="text-center text-gray-600 mt-2 lg:text-lg">
                See how CuriousJr is designed to educate, not distract
            </p>

            {/* Table */}
            <div className="w-full flex items-center justify-center">
                <div className="overflow-x-auto mt-8 border-2 w-4xl border-gray-300 rounded-xl px-2">
                    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="py-4">
                            <tr className="border-b-2 border-gray-300 py-4 px-4">
                                <th className="px-0 py-2 w-16 sm:w-28 lg:w-64  text-left  font-semibold">
                                    Features
                                </th>
                                <th className="px-0 py-0 text-center  font-semibold">
                                    Regular Tablet

                                </th>
                                <th className="px-0  py-0 text-center  font-semibold">
                                    CuriousJr Tablet

                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t-gray-50">
                                <td className="px-0 py-3 text-sm">Distraction-free learning environment</td>
                                <td className="px-0 py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={uncheck} alt="uncheck" />
                                    </div>
                                </td>
                                <td className="px-0 py-0 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={check} alt="check" />
                                    </div>
                                </td>
                            </tr>

                            <tr className="border-t-2 border-gray-300">
                                <td className="px-0 py-3 text-sm">Full parental control & MDM</td>
                                <td className="px-0 py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={uncheck} alt="uncheck" />
                                    </div>
                                </td>
                                <td className="px-0 py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={check} alt="check" />
                                    </div>
                                </td>
                            </tr>

                            <tr className="border-t-2 border-gray-300">
                                <td className="px-0 py-3 text-sm">Only curated educational content</td>
                                <td className="px-0 py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={uncheck} alt="uncheck" />
                                    </div>
                                </td>
                                <td className="px-0 py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={check} alt="check" />
                                    </div>
                                </td>
                            </tr>

                            <tr className="border-t-2 border-gray-300">
                                <td className="px-0 py-3 text-sm">Structured learning time</td>
                                <td className="px-0 py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={uncheck} alt="uncheck" />
                                    </div>
                                </td>
                                <td className="px-0 py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={check} alt="check" />
                                    </div>
                                </td>
                            </tr>

                            <tr className="border-t-2 border-gray-300">
                                <td className="px-0 py-3 text-sm">Built-in curriculum & progress tracking</td>
                                <td className="px-0 py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={uncheck} alt="uncheck" />
                                    </div>
                                </td>
                                <td className="px-0 py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <Image src={check} alt="check" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Banner2