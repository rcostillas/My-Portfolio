import React from "react";
import styles from "../style";
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
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* Discount information */}
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Romeo Costillas <br className="sm:block hidden" />{" "}
            <h2 className="text-gradient animate-pulse">
              Microsoft Certified Professional1
            </h2>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          I'm Romeo Costillas, and I'm passionate about teaching Microsoft
          Office, especially Excel, to empower individuals with valuable skills
          in data analysis.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative animate-wiggle`}
      >
        <img
          src={"/Images/LinkedIn_Romeo2.jpg"}
          alt="Romeo Costillas"
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
