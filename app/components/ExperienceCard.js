import React from "react";

const ExperienceCard = ({ position, company, duties }) => (
  <div className="flex items-center justify-center px-2 py-2 rounded-[10px] max-w-[1920px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex-grow">
      <div className="flex justify-between">
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white text-left">
          <strong>{position}</strong>
        </p>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white text-right">
          {company}
        </p>
      </div>
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white text-left">
        {duties}
      </p>
    </div>
  </div>
);

export default ExperienceCard;
