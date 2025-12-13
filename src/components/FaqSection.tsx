import React, { useState } from "react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is PitaB?",
    answer:
      "PitaB is a platform that helps you create beautiful landing pages with ease.",
  },
  {
    id: 2,
    question: "Do I need coding experience?",
    answer:
      "No. You can build everything visually without writing a single line of code.",
  },
  {
    id: 3,
    question: "Can I use my own domain name?",
    answer:
      "Yes, you can connect your custom domain easily from the settings.",
  },
];

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Frequently Asked Questions
      </h2>

      {faqs.map((faq) => (
        <div
          key={faq.id}
          className=" rounded-xl p-4 mb-3 shadow-sm"
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
              {openId === faq.id ? "×" : "+"}
            </button>
          </div>

          {/* Answer */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === faq.id ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-sm text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
