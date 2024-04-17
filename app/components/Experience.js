import React from "react";
import styles from "../style";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{
        paddingTop: "0",
        justifyContent: "flex-end",
        paddingBottom: "10",
      }}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} text-right`}>
            <span className="text-white">Work</span>{" "}
            <span className="text-gradient">Experience</span>
          </p>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
