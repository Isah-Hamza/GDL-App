import React, { useEffect } from "react";
import { BiCaretDown } from "react-icons/bi";

const CustomSelect = ({ options, id, label, className }) => {
  return (
    <div className="relative w-full">
      {/* <label htmlFor={id} className="block text-sm">
        {label}
      </label> */}
      <select
        required
        className={`text-gray-600 w-full h-[45px] appearance-none px-2 py-1 rounded border outline-primary mt-1 text-sm ${className}`}
      >
        {options.map((option, idx) => (
          <option
            selected={idx === 0}
            disabled={idx === 0}
            // className={idx === 0 && ""}
            key={idx}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <BiCaretDown className="absolute top-1/2 -translate-y-1/2 right-3" />
    </div>
  );
};

export default CustomSelect;
