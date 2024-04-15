import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Microsoft Office Professional",
          "Microsoft Office Specialist Master",
          "Microsoft Office Specialist Excel Expert",
          "Microsoft Certified Solutions Associate BI Reporting",
          "Microsoft Office Specialist PowerPoint",
          "Microsoft Office Specialist Word",
          "Six Sigma Green Belt",
          "Discrete Event Simulation Modeler",
          "Person-Centered Care Fellow",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
