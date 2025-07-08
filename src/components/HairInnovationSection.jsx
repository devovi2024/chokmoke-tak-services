import React from "react";
import { FaCheckCircle, FaSmile } from "react-icons/fa";

import {
  beforeAfter,
  cashOnDelivery,
  customerSupport,
  doctorHairLab,
  happyPerson,
  medicineCertified,
  medicalReport,
  assetsImage,
} from "../assets/images/index";

const features = [
  "কম পুষ্টি ও চুল পড়া বন্ধে প্রথম উদ্ভাবিত কার্যকরী ওষুধের পেটেন্ট পাওয়া হয়েছে",
  "ডাক্তারি ও গবেষণা কেন্দ্রের আইআরসি সার্টিফিকেটসহ প্রমাণিত ফলাফল",
  "খরচ কম এবং দ্রুত ফলপ্রসূতার গ্যারান্টি",
];

const HairInnovationSection = () => {
  return (
    <section
      className="bg-white dark:bg-gray-900 transition-colors duration-700 py-12 px-6 md:px-20 lg:px-32 font-inter"
      dir="auto"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-8 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-snug">
            চুল পড়া বন্ধ ও নতুন চুল জন্ম দেওয়ার গবেষণায়
            <br /> আমাদের একক পেটেন্ট ও সাফল্য
          </h2>
          <ul className="space-y-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <FaCheckCircle className="text-purple-600 dark:text-purple-400 text-2xl flex-shrink-0 animate-pulse" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center md:justify-start">
            <button
              className="bg-[#d90429] hover:bg-[#b00322] text-white px-8 py-3 rounded-2xl font-semibold flex items-center gap-3 shadow-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-600"
              type="button"
            >
              <FaSmile className="text-lg" />
              পরামর্শ নিন
            </button>
          </div>
        </div>

        {/* Right Images Grid */}
        <div className="flex justify-center" style={{ minHeight: "350px" }}>
          <div className="space-y-4 flex flex-col justify-center">
            <div className="flex justify-center">
              <ImageBox src={beforeAfter} alt="Before and After Hair Treatment" />
            </div>
            <div className="flex justify-center gap-5">
              <ImageBox src={cashOnDelivery} alt="Cash On Delivery Available" />
              <ImageBox src={customerSupport} alt="24/7 Customer Support" />
            </div>
            <div className="flex justify-center gap-5">
              <ImageBox src={doctorHairLab} alt="Doctor's Hair Lab Innovation" />
              <ImageBox src={happyPerson} alt="Happy Person with Thick Hair" />
              <ImageBox src={medicineCertified} alt="Certified Medicine Image" />
            </div>
            <div className="flex justify-center">
              <ImageBox src={medicalReport} alt="Medical Report Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageBox = ({ src, alt }) => (
  <div className="overflow-hidden rounded-xl shadow-lg w-24 h-24 md:w-28 md:h-28 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  </div>
);

export default HairInnovationSection;
