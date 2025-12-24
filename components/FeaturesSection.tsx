import { daily, homework, interactive, tailored, twoTeacher } from "@/Assets";
import Image, { StaticImageData } from "next/image";

export default function FeaturesSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* ROW 1 - BIG CARD (spans 2 columns) */}
                <div className="md:col-span-2 bg-[#FFF2E1] relative rounded-3xl p-6 flex items-center justify-between">
                    <div className="max-w-md">
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Interactive Live Classes
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Interactive elements, engaging animations, and badges <br /> for learning
                            fun and effective
                        </p>
                    </div>

                    <Image
                        src={interactive}
                        alt="Interactive Live Classes"
                        width={320}
                        height={320}
                        className="object-contain absolute -top-12 right-6"
                    />
                </div>

                {/* <div className="relative bg-[#FFFFDD] rounded-3xl px-6 pt-[30%] pb-6 text-center">
                    <div></div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Homework Assistance
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                            No more homework struggles! Get real-time <br /> homework support from our Mentors
                        </p>
                    </div>


                    <div className="absolute left-1/2 -top-8 -translate-x-1/2">
                        <Image
                            src={homework}
                            alt="Homework Assistance"
                            width={240}
                            height={240}
                        />
                    </div>
                </div>


                <div className="bg-[#E5FFE9] rounded-3xl p-6 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                        The Two-Teacher Model
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                        Dedicated educator + personal mentor for your child
                    </p>

                    <div className="mt-4 flex justify-end">
                        <Image
                            src={twoTeacher}
                            alt="Two Teacher Model"
                            width={130}
                            height={130}
                        />
                    </div>
                </div>

                <div className="bg-[#EAF7FF] rounded-3xl p-6 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Tailored Practice Solutions
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                        Practice exercises designed to reinforce concepts
                    </p>

                    <div className="mt-4 flex justify-end">
                        <Image
                            src={tailored}
                            alt="Practice Solutions"
                            width={130}
                            height={130}
                        />
                    </div>
                </div>

                <div className="bg-[#FFF2CF] rounded-3xl p-6 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Daily Performance Tracking
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                        Track progress through detailed reports
                    </p>

                    <div className="mt-4 flex justify-end">
                        <Image
                            src={daily}
                            alt="Performance Tracking"
                            width={130}
                            height={130}
                        />
                    </div>
                </div> */}

                <FeatureCard
                    bg="bg-[#FFFFDD]"
                    title="Homework Assistance"
                    desc="No more homework struggles! Get real-time homework support from our Mentors"
                    img={homework}
                    imgSize={240}
                />

                <FeatureCard
                    bg="bg-[#E5FFE9]"
                    title="The Two-Teacher Model"
                    desc="Dedicated educator + personal mentor for your child"
                    img={twoTeacher}
                />

                <FeatureCard
                    bg="bg-[#EAF7FF]"
                    title="Tailored Practice Solutions"
                    desc="Practice exercises designed to reinforce concepts"
                    img={tailored}
                />

                <FeatureCard
                    bg="bg-[#FFF2CF]"
                    title="Daily Performance Tracking"
                    desc="Track progress through detailed reports"
                    img={daily}
                />

            </div>
        </section>
    );
}

interface FeatureCardProps {
    bg: string;
    title: string;
    desc: string;
    img: StaticImageData;
    imgSize?: number;
}

const FeatureCard = ({ bg, title, desc, img, imgSize = 180 }: FeatureCardProps) => {
    return (
        <div className={`relative ${bg} rounded-3xl px-6 pt-[30%] pb-6 text-center`}>
            {/* Text */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                    {desc}
                </p>
            </div>

            {/* Floating Image */}
            <div className="absolute left-1/2 -top-8 -translate-x-1/2">
                <Image
                    src={img}
                    alt={title}
                    width={imgSize}
                    height={imgSize}
                />
            </div>
        </div>
    )
}
