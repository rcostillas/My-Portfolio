import React from "react";

const CertificationCard = ({ content, source }) => (
  <div className="flex items-center justify-center px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={source}
      alt="certification_icon"
      className="w-24 h-24 object-contain mr-4" // Adjust the width and height as needed
    />
    <p className="flex-grow font-poppins font-normal text-[18px] leading-[32.4px] text-white text-center">
      {content}
    </p>
  </div>
);

export default CertificationCard;
