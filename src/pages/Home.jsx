import React from "react";
import FeaturesHighlight from "../components/FeaturesHighlight";
import HairInnovationSection from "../components/HairInnovationSection";
import HairResult from "../components/HairResult";
import ConsultationForm from "../components/ConsultationForm";

const Home = () => {
  return (
    <>      
    <div className="mt-4">
        <ConsultationForm />
      <FeaturesHighlight />
      <HairInnovationSection />
      <HairResult />
    </div>
    
    </>
  );
};

export default Home;
