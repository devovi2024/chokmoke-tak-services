// Import all images individually
import beforeAfter from './before-after-hair.png';
import cashOnDelivery from './cash-on-delivery.png';
import customerSupport from './customer-support.jpg';
import doctorHairLab from './doctor-hair-lab.png';
import happyPerson from './happy-person-thick-hair.png';
import medicineCertified from './medicine-certified.jpeg';
import medicalReport from './medical-report.jpg';

// Export named exports for each image
export {
  beforeAfter,
  cashOnDelivery,
  customerSupport,
  doctorHairLab,
  happyPerson,
  medicineCertified,
  medicalReport,
};

// Optional: also export an array with src + alt to use in components if you want
export const assetsImage = [
  { src: beforeAfter, alt: "Before and After Hair Treatment" },
  { src: cashOnDelivery, alt: "Cash On Delivery Available" },
  { src: customerSupport, alt: "24/7 Customer Support" },
  { src: doctorHairLab, alt: "Doctor's Hair Lab Innovation" },
  { src: happyPerson, alt: "Happy Person with Thick Hair" },
  { src: medicineCertified, alt: "Certified Medicine Image" },
  { src: medicalReport, alt: "Medical Report Image" },
];
