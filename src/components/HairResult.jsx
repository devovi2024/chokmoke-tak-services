import React from "react";
import { FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../assets/images/head/image1.jpg";
import image2 from "../assets/images/head/image2.jpg";
import image33 from "../assets/images/head/image 33.jpg";
import image44 from "../assets/images/head/image 44.jpg";

const HairResult = () => {
  return (
    <section className="mx-auto px-4 py-14 sm:py-20 text-center bg-[#081b33] text-white shadow-2xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12 flex justify-center items-center gap-4">
        <FaBullseye className="text-pink-400 text-4xl animate-pulse drop-shadow-xl" />
        ওষুধ ব্যবহারের আগে ও পরে
        <span className="text-pink-400 text-2xl ml-2">—</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <ImagePair before={image1} after={image2} altBefore="ব্যবহারের আগে - ব্যক্তি ১" altAfter="ব্যবহারের পরে - ব্যক্তি ১" />
        <ImagePair before={image33} after={image44} altBefore="ব্যবহারের আগে - ব্যক্তি ২" altAfter="ব্যবহারের পরে - ব্যক্তি ২" />
      </div>
    </section>
  );
};

const ImagePair = ({ before, after, altBefore, altAfter }) => {
  return (
    <motion.div className="flex flex-row justify-center items-center gap-6 md:gap-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
      <SmallImage src={before} alt={altBefore} label="ব্যবহারের আগে" />
      <SmallImage src={after} alt={altAfter} label="ব্যবহারের পরে" badgeColor="bg-green-600" />
    </motion.div>
  );
};

const SmallImage = ({ src, alt, label, badgeColor = "bg-black bg-opacity-60" }) => {
  return (
    <div className="relative w-full max-w-[220px] h-[240px] overflow-hidden rounded-xl shadow-lg group transition-all">
      <motion.img src={src} alt={alt} className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105" loading="lazy" draggable={false} />
      <div className={`absolute bottom-2 right-2 ${badgeColor} text-white text-[10px] px-2 py-0.5 rounded-full shadow`}>{label}</div>
    </div>
  );
};

export default HairResult;
