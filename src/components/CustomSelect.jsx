import React from "react";
import { BiCaretDown } from "react-icons/bi";

const CustomSelect = ({ options, id, label }) => {
  return (
    <div className="relative w-full">
      <label htmlFor={id} className="block text-sm text-primary">
        {label}
      </label>
      <select className="w-full h-[45px] appearance-none px-2 py-1 rounded border border-primary outline-primary mt-1 text-sm">
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <BiCaretDown className="absolute top-[45px] -translate-y-1/2 right-3" />
    </div>
  );
};

export default CustomSelect;
