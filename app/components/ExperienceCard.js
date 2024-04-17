import React from "react";

const ExperienceCard = ({ position, company, duties }) => (
  <div className="flex items-center justify-center px-2 py-2 rounded-[10px] max-w-[1920px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex-grow">
      <p className="fontfont-poppins font-normal text-[18px] leading-[32.4px] text-white text-center">
        {position}
      </p>
    </div>

    <div className="flex-grow">
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white text-center">
        {company}
      </p>
    </div>

    <div className="flex-grow">
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white text-center">
        {duties}
      </p>
    </div>
  </div>
);

export default ExperienceCard;
