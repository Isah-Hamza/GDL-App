import React from "react";

const CustomButton = ({ className, children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`py-[14px] text-sm px-12 rounded bg-primary text-white font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
