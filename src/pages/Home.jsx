import React from "react";
import FeaturesHighlight from "../components/FeaturesHighlight";
import HairInnovationSection from "../components/HairInnovationSection";
import HairResult from "../components/HairResult";
import ConsultationForm from "../components/ConsultationForm";

const Home = () => {
  return (
    <>      
      <ConsultationForm />
      <FeaturesHighlight />
      <HairInnovationSection />
      <HairResult />
    </>
  );
};

export default Home;
