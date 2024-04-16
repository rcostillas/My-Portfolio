import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`animate-bounce focus:animate-none hover:animate-none py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Resume
  </button>
);

export default Button;
