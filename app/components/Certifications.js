import React from "react";
import styles from "../style";
import { certifications } from "../constants";

const Certifications = () => (
  <section className={`${styles.flexCenter} my-0`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {certifications.map((certification) => (
        <div
          key={certification.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-0 sm:m-0 `}
        >
          <img
            src={certification.source}
            alt={certification.name}
            className="sm:w-[130px] w-[100px] object-contain hover:rotate-6 shadow-lg shadow-cyan-500/50
    "
          />
          <div
            className={`${styles.flexCenter} flex-wrap w-full text-gradient-base`}
          >
            {certification.name}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;
