import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { about_me } from "../constants";

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
  <section id="about_me" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Driven to continously enhance, <br className="sm:block hidden" /> my
        skills and talents.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With this mindset, I aim to share my knowledge with everyone to the best
        of my ability, whether through video tutorials, engaging with the
        community on social media, or answering questions.
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
// const AboutMe = ({ knowmemore }) => {
//   return (
//     <section>
//       <div
//         id="about-me"
//         className={`flex md:flex-row flex-col ${styles.paddingY}`}
//         style={{ paddingTop: "0" }}
//       >
//         <div className="flex-1 flex flex-row-reverse">
//           <div className={`flex flex-col xl:px-0 sm:px-16 px-6`}>
//             <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 justify-end">
//               <p className={`${styles.paragraph} ml-2 `}>
//                 <span className="text-gradient">About Me</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className={layout.section}>
//         <div className={layout.sectionInfo}>
//           <h2 className={styles.heading2}>
//             You do the business, <br className="sm:block hidden" /> we’ll handle
//             the money.
//           </h2>
//           <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//             With the right credit card, you can improve your financial life by
//             building credit, earning rewards and saving money. But with hundreds
//             of credit cards on the market.
//           </p>
//           <Button styles={`mt-10`} />
//         </div>

//         <div className={`${layout.sectionImg} flex-col`}>
//           {knowmemore.map((knowme, index) => (
//             <AboutMe key={knowme.id} {...feature} index={index} />
//           ))}
//         </div>
//       </section>
//     </section>
//   );
// };

//export default AboutMe;
