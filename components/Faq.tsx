"use client";

import { cross, faq, plus } from "@/Assets";
import { spawn } from "child_process";
import Image from "next/image";
import React, { useState } from "react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Is this tablet for learning?",
    answer:
      "Yes. It runs a learning-focused OS with parental controls to limit distractions.",
  },
  {
    id: 2,
    question: "Is the batch included with the tablet?",
    answer:
      "Yes. Batch access comes bundled with the tablet.",
  },
  {
    id: 3,
    question: "What learning is included?",
    answer:
      "Live classes, 1:1 mentor support, recordings, worksheets, tests, progress tracking, coding, Olympiad prep, and revision courses. Access depends on the selected batch.",
  },
  {
    id: 4,
    question: "Does the tablet support homework help?",
    answer:
      "Yes. Students can scan worksheets to get instant answers and clear explanations using AI-powered doubt solving.",
  },
  {
    id: 5,
    question: "Can my child use it offline?",
    answer:
      "Yes. Downloaded classes and content can be accessed offline.",
  },
  {
    id: 6,
    question: "How do parents control usage?",
    answer:
      "Parents can manage screen time, lock entertainment apps, control app access, and view weekly learning reports via the MDM Parental Control App.",
  },
  {
    id: 7,
    question: "Does the tablet support calling?",
    answer:
      "Yes. Calling is available with a SIM card.",
  },
  {
    id: 8,
    question: "Is the content updated regularly?",
    answer:
      "Yes. Courses, practice material, and learning features are updated regularly to stay aligned with the latest curriculum and exam patterns, based on the selected batch.",
  },
];


const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className="w-full max-w-lg mx-auto px-5 py-8 flex lg:hidden flex-col gap-4 items-center ">
        <p className="text-2xl font-semibold">Frequently Asked Questions</p>
        <Image src={faq} alt="faq image" />
        <div>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className=" w-full rounded-xl p-4 mb-3 shadow-sm"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-medium">{faq.question}</span>

                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg 
                text-xl font-bold transition-all
                "
                >
                  {openId === faq.id ? <Image src={cross} alt="cross" /> : <Image src={plus} alt="plus" />}
                </button>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? "max-h-40 mt-2" : "max-h-0"
                  }`}
              >
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  mx-auto px-5 py-16 hidden lg:flex flex-col gap-8 items-center ">
        <p className="text-4xl font-semibold">Frequently Asked Questions</p>
        <div className="flex w-full  items-center justify-center gap-24">
          {/* <div className="h-full w-full border-2"> */}
            <Image className="w-96 h-120" src={faq} alt="faq image" />
          {/* </div> */}
          <div>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className=" w-180 rounded-xl p-4 mb-3 shadow-sm"
              > 
                {/* Header */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-medium">{faq.question}</span>

                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg 
                text-xl font-bold transition-all 
                "
                  >
                    {openId === faq.id ? <Image className="hover:cursor-pointer" src={cross} alt="cross" /> : <Image className="hover:cursor-pointer" src={plus} alt="plus" />}
                  </button>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? "max-h-40 mt-2" : "max-h-0"
                    }`}
                >
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>

  );
};

export default FaqSection;