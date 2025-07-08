import React from "react";
import { FaCheckCircle, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    title: "অরিজিনাল পণ্য নিশ্চিতকরণ",
    description: "আমাদের সকল পণ্য ১০০% আসল ও গুণগতমান সম্পন্ন।",
    icon: FaCheckCircle,
    iconBg: "bg-green-600",
  },
  {
    id: 2,
    title: "ক্যাশ অন ডেলিভারি",
    description: "দরজায় টাকা দেওয়ার সুবিধা, কোন ঝামেলা ছাড়াই।",
    icon: FaMoneyBillWave,
    iconBg: "bg-yellow-500",
  },
  {
    id: 3,
    title: "২৪/৭ গ্রাহক সেবা",
    description: "যেকোনো সমস্যায় আমরা সবসময় আপনার পাশে আছি।",
    icon: FaHeadset,
    iconBg: "bg-blue-600",
  },
];

const FeaturesHighlight = () => {
  return (
    <section
      className="relative bg-white dark:bg-gray-900 py-16 px-6 font-inter transition-colors duration-500"
      dir="ltr"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
        <div className="bg-pink-100 dark:bg-pink-900 rounded-3xl flex items-center justify-center min-h-[320px] px-10 shadow-lg hover:scale-[1.03] transform transition-transform duration-500">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white text-left leading-snug select-none">
            চুল পড়া <br />
            বন্ধ করুন <br />
            নতুন চুল জন্ম দিন
          </h2>
        </div>

        <div className="flex flex-col gap-12" style={{ minHeight: "320px" }}>
          {featuresData.map(({ id, title, description, icon: Icon, iconBg }) => (
            <article
              key={id}
              className="flex items-center gap-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default group"
            >
              <div
                className={`${iconBg} w-16 h-16 flex items-center justify-center rounded-full text-white text-3xl drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-xl`}
              >
                <Icon />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-indigo-500 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;
