"use client";

import { Banner3Image, firstPin, fourthPin, leftDottedLine, rightDottedLine, secondPin, thirdPin } from "@/Assets";
import Image, { StaticImageData } from "next/image";

type Card = {
  title: string;
  description: string;
  bg: string;
  pin: StaticImageData;
  titleColor: string;
};

const cards: Card[] = [
  {
    title: "Homework Help",
    description:
      "Capture any worksheet or notes and get instant answers, clear explanations, and AI-powered follow-up doubt solving",
    bg: "bg-orange-50",
    pin: firstPin,
    titleColor: "text-orange-600",
  },
  {
    title: "Learn & Play",
    description:
      "Learn & Play offers interactive quizzes that simplify concepts and make studying more fun",
    bg: "bg-pink-50",
    pin: secondPin,
    titleColor: "text-pink-600",
  },
  {
    title: "Report Card",
    description:
      "Report Card gives clear insights and weekly reports for easy progress tracking",
    bg: "bg-yellow-50",
    pin: thirdPin,
    titleColor: "text-yellow-600",
  },
  {
    title: "Challenge of the Day",
    description:
      "Challenge of the Day gives students a fresh daily quiz to learn, compete, and stay sharp",
    bg: "bg-blue-50",
    pin: fourthPin,
    titleColor: "text-blue-600",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="relative w-full py-24 overflow-hidden 
  bg-[radial-gradient(circle_at_center,#FFF3EC_0%,#FFFFFF_70%)]">

      <div className="max-w-7xl mx-auto relative">

        {/* Center Tablet */}
        <div className="relative z-10 flex justify-center">
          <Image
            src={Banner3Image}
            alt="CuriousJr Tablet"
            width={300}
            height={600}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Cards */}
        <div className="absolute inset-0 flex items-center justify-around gap-12 px-0">

          {/* Left Side */}
          <div className="flex flex-col gap-28 z-10">
            <PinnedCard {...cards[0]} rotate="rotate-16" />
            <PinnedCard {...cards[2]} rotate="rotate-16" />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-28 z-10">
            <PinnedCard {...cards[1]} rotate="-rotate-16" />
            <PinnedCard {...cards[3]} rotate="-rotate-16" />
          </div>
        </div>

        {/* Dotted connectors */}
        <Image
          src={leftDottedLine}
          alt=""
          width={300}
          height={200}
          className="absolute left-[20%] -top-[10%]"
        />
        <Image
          src={rightDottedLine}
          alt=""
          width={300}
          height={200}
          className="absolute right-[20%] z-0 -top-[10%]"
        />
        <Image
          src={leftDottedLine}
          alt=""
          width={300}
          height={200}
          className="absolute left-[20%] bottom-[20%]"
        />
        <Image
          src={rightDottedLine}
          alt=""
          width={300}
          height={200}
          className="absolute right-[20%] z-0 bottom-[24%]"
        />
      </div>
    </section>
  );
}

/* ---------------- Card Component ---------------- */

function PinnedCard({
  title,
  description,
  bg,
  pin,
  titleColor,
  rotate,
}: {
  title: string;
  description: string;
  bg: string;
  pin: StaticImageData;
  titleColor: string;
  rotate: string;
}) {
  return (
    <div className={`relative w-64 ${rotate}`}>
      {/* Pin */}
      <Image
        src={pin}
        alt="pin"
        width={36}
        height={36}
        className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
      />

      {/* Card */}
      <div
        className={`rounded-2xl p-5 bg-white shadow-xl`}
      >
        <div className={`rounded-xl p-4 ${bg}`}>
          <h3 className={`font-bold mb-2 ${titleColor}`}>
            {title}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
