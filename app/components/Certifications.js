import React from "react";
import styles from "../style";

const Certifications = () => {
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
          {/* </div><img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">My</span>{" "}
            <span className="text-gradient">Certifications</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

// import React from "react";
// import styles from "../style";
// import { certifications } from "../constants";

// const Certifications = () => (
//   <section className={`${styles.flexCenter} my-0`}>
//     <div className={`${styles.flexCenter} flex-wrap w-full`}>
//       {certifications.map((certification) => (
//         <div
//           key={certification.id}
//           className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-0 sm:m-0 `}
//         >
//           <img
//             src={certification.source}
//             alt={certification.name}
//             className="sm:w-[130px] w-[100px] object-contain hover:rotate-6 shadow-lg shadow-cyan-500/50
//     "
//           />
//           <div
//             className={`${styles.flexCenter} flex-wrap w-full text-gradient-base`}
//           >
//             {certification.name}
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Certifications;
