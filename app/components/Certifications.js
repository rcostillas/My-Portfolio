import React from "react";
import styles from "../style";
import { certifications } from "../constants";
import CertificationCard from "./CertificationCard";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{ paddingTop: "0" }}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">My</span>{" "}
            <span className="text-gradient">Certifications</span>
          </p>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {certifications.map((certification) => (
            <CertificationCard key={certification.id} {...certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
