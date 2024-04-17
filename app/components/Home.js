import React from "react";
import styles from "../style";
import TypeWriter from "./Typewriter";
// import LinkedIn_Romeo2 from "../assets/LinkedIn_Romeo2.jpg";
// import logo2 from "../assets/logo2.png";
// import GetStarted from "./GetStarted";

const Home = () => {
  const imagePath = "../assets/logo2.png";

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{ paddingTop: "0" }}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[67.2px] leading-[46px]">
            Hi!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            <br className="sm:block hidden" />{" "}
          </h1>
        </div>

        <div className="text-gradient">{`I'm Romeo Costillas`}</div>

        {/* <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          I&apos;m passionate about teaching Microsoft Office, especially Excel,
          to empower individuals with valuable skills in data analysis. With
          over 15 years of experience as an Excel instructor and creator of
          reports and dashboard, I've had the privilege of helping countless
          individuals unlock the full potential of their data. Let's dive into
          the world of Excel together and unleash its power for insightful
          analysis and informed decision-making.
          <br />
          <br />
        </p> */}

        <div className="text-gradient">
          <TypeWriter />
        </div>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative animate-wiggle`}
      >
        <img
          src={"/Images/LinkedIn_Romeo2.jpg"}
          alt="Romeo Costillasx"
          className="w-[50%] h-[auto] relative z-[10] rounded-[40px] hover:rotate-6 shadow-lg shadow-cyan-500/50"
          style={{
            border:
              "4px solid radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)",
          }}
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Home;
