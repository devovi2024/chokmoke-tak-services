import React from "react";
import { FaPhoneAlt, FaUser, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import adviseImg from "../assets/images/head/doctor-and-nurse-giving-advice-to-a-patient-free-vector.jpg";

const ConsultationForm = () => {
  return (
    <div
      className="relative mt-4 bg-gradient-to-tr from-[#182c1a] to-[#08140e] text-white overflow-hidden min-h-screen w-screen flex items-center justify-center px-6 py-16 dark:from-gray-900 dark:to-black transition-colors duration-700"
      style={{ maxWidth: "100vw", maxHeight: "100vh" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-green-900/10 backdrop-blur-md z-0 origin-top-left transform -skew-y-6 rounded-b-[8%]" />
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-14 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10 text-left max-w-[600px] w-full"
          style={{ minHeight: "450px" }}  
        >
          <div className="inline-flex items-center gap-3 justify-start">
            <span className="bg-green-700 px-5 py-1.5 rounded-full text-lg font-medium tracking-wide shadow-md">
              💬 ফ্রি এক্সপার্ট কনসালটেশন
            </span>
            <FaPhoneAlt className="text-pink-300 text-xl animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 leading-snug drop-shadow">
            নতুন চুলের জন্য বিজ্ঞান ও
            <br />
            সচেতনতার সমাধান
          </h1>

          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            এখনই আবেদন করুন — আমাদের এক্সপার্ট টিম খুব দ্রুত আপনার সাথে যোগাযোগ করবে।
          </p>

          <form className="flex flex-col items-start gap-5 mt-4 max-w-lg w-full">
            <div className="w-full flex items-center bg-white rounded-xl px-5 py-3.5 shadow-md focus-within:ring-2 focus-within:ring-green-500">
              <FaUser className="text-green-700 mr-3 text-xl" />
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="flex-1 bg-transparent outline-none placeholder-green-800 text-green-900 text-base font-medium"
                required
              />
            </div>

            <div className="w-full flex items-center bg-white rounded-xl px-5 py-3.5 shadow-md focus-within:ring-2 focus-within:ring-green-500">
              <FaMobileAlt className="text-green-700 mr-3 text-xl" />
              <input
                type="tel"
                placeholder="মোবাইল নম্বর দিন"
                className="flex-1 bg-transparent outline-none placeholder-green-800 text-green-900 text-base font-medium"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg font-bold py-3 rounded-xl shadow-lg hover:scale-[1.01] transition-transform duration-300"
            >
              📞 এখনই আবেদন করুন
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center w-full"
          style={{ minHeight: "450px" }}
        >
          <motion.img
            src={adviseImg}
            alt="ডাক্তার পরামর্শ"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute -top-8 -right-8 w-36 h-36 bg-pink-400/20 rounded-full blur-2xl z-[-1] animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationForm;
