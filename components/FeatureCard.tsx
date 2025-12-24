"use client";
import { firstPin, secondPin, thirdPin, fourthPin } from "@/Assets";
import Image, { StaticImageData } from "next/image";

type Feature = {
  title: string;
  description: string;
  pinColor: string;
  cardBg: string;
  titleColor: string;
  borderColor: string;
  img: StaticImageData;
  shadowColor: string
};

const features: Feature[] = [
  {
    title: "Homework Help",
    description:
      "Capture any worksheet or notes and get instant answers, clear explanations, and AI-powered follow-up doubt solving",
    pinColor: "bg-orange-500",
    cardBg: "bg-[#FFDECC]",
    titleColor: "text-[#C76E43]",
    borderColor: "border-orange-300",
    img: firstPin,
    shadowColor: "rgba(255, 159, 67, 0.45)",   // orange
  },
  {
    title: "Learn & Play",
    description:
      "Capture any worksheet or notes and get instant answers, clear explanations, and AI-powered follow-up doubt solving",
    pinColor: "bg-pink-400",
    cardBg: "bg-[#FFDADA]",
    titleColor: "text-[#C26262]",
    borderColor: "border-pink-300",
    img: secondPin,
    shadowColor: "rgba(236, 72, 153, 0.4)",   // pink

  },
  {
    title: "Report Card",
    description:
      "Capture any worksheet or notes and get instant answers, clear explanations, and AI-powered follow-up doubt solving",
    pinColor: "bg-yellow-400",
    cardBg: "bg-[#FFF5CA]",
    titleColor: "text-[#D39F0F]",
    borderColor: "border-yellow-300",
    img: thirdPin,
    shadowColor: "rgba(250, 204, 21, 0.4)",   // yellow

  },
  {
    title: "Challenge of the Day",
    description:
      "Capture any worksheet or notes and get instant answers, clear explanations, and AI-powered follow-up doubt solving",
    pinColor: "bg-blue-500",
    cardBg: "bg-[#D8E6FF]",
    titleColor: "text-[#516BAA]",
    borderColor: "border-blue-300",
    img: fourthPin,
    shadowColor: "rgba(59, 130, 246, 0.35)",  // blue
  },
];

const FeatureCards = () => {
  return (
    <div className="py-12 sm:px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-xl p-3 sm:p-6 "
          >
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full"
              style={{
                boxShadow: `0 16px 10px ${feature.shadowColor}`,
              }}
            >
              <Image
              className="w-8 h-10"
                src={feature.img}
                alt={feature.title}
                
              />
            </div>
            
            {/* Inner Card */}
            <div
              className={`mt-6 p-2 sm:p-5 rounded-xl sm:rounded-2xl border ${feature.cardBg} ${feature.borderColor}`}
            >
              <h3
                className={`text-xs sm:text-lg font-bold mb-2 ${feature.titleColor}`}
              >
                {feature.title}
                
              </h3>
              <p className="text-[10px] sm:text-sm text-gray-700 leading-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
