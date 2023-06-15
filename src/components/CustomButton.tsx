import React from "react";

const CustomButton = ({ className, children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`py-2.5 text-sm px-10 rounded bg-primary text-white font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
