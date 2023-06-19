import React from "react";

const CustomButton = ({ type, className, children, clickHandler }) => {
  return (
    <button
      type={type ?? "button"}
      onClick={clickHandler}
      className={`py-[14px] text-sm px-12 rounded bg-primary text-white font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
