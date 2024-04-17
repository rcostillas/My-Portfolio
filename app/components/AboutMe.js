import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { about_me } from "../constants";
import Image from "next/image";

const Highlights = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== about_me.length - 1 ? "mb-6" : "mb-0"
    } highlight-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="degree" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const AboutMe = () => (
  <section id="about_me" title="About Me" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Driven to continously enhance, <br className="sm:block hidden" /> my
        skills and talents.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With this mindset, I aim to share my knowledge with everyone to the best
        of my ability, whether through video tutorials, engaging with the
        community on social media, or answering some real-life questions.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {about_me.map((about_me, index) => (
        <Highlights key={about_me.id} {...about_me} index={index} />
      ))}
    </div>
  </section>
);

export default AboutMe;
