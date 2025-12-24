import Image from "next/image"
import { processor, storage, camera, screen, memory, battery } from "@/Assets"
const TabSpecs = () => {
    return (
        <div className="flex flex-col items-center px-5 gap-16 my-16">
            <div className="text-center">
                <p className="text-2xl lg:text-3xl font-semibold mb-2">Tablet Specifications</p>
                <p className="text-center text-sm lg:text-lg">Everything your child needs for smooth, safe learning</p>
            </div>

            <div className="w-full flex lg:hidden justify-between sm:justify-evenly px-3">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={processor} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Processor</p>
                            <p className="text-sm">Octa-Core 2.2GHz</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={storage} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Storage</p>
                            <p className="text-sm">64 GB</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={camera} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Camera</p>
                            <p className="text-sm">8.0 MP</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={screen} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Screen Size</p>
                            <p className="text-sm">8.7" (220.5mm)</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={memory} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Memory</p>
                            <p className="text-sm">4 GB</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={battery} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Battery</p>
                            <p className="text-sm">5100 mAh</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full hidden lg:flex  justify-between sm:justify-evenly px-3">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={processor} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Processor</p>
                            <p className="text-sm">Octa-Core 2.2GHz</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={memory} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Memory</p>
                            <p className="text-sm">4 GB</p>
                        </div>
                    </div>

                    {/* <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={camera} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Camera</p>
                            <p className="text-sm">8.0 MP</p>
                        </div>
                    </div> */}
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={screen} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Screen Size</p>
                            <p className="text-sm">8.7" (220.5mm)</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={camera} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Camera</p>
                            <p className="text-sm">8.0 MP</p>
                        </div>
                    </div>

                    {/* <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={battery} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Battery</p>
                            <p className="text-sm">5100 mAh</p>
                        </div>
                    </div> */}
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={storage} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Storage</p>
                            <p className="text-sm">64 GB</p>
                        </div>
                    </div>

                    {/* <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={camera} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Camera</p>
                            <p className="text-sm">8.0 MP</p>
                        </div>
                    </div> */}

                    <div className="flex items-center gap-4">
                        <div>
                            <Image className="w-7 h-7" src={battery} alt="processor" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Battery</p>
                            <p className="text-sm">5100 mAh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabSpecs