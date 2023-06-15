import React from "react";

const CustomButton = ({ className, children }) => {
  return (
    <button
      className={`py-2.5 text-sm px-10 w-full rounded bg-primary text-white font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
