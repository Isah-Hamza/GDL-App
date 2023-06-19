import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

export const CustomInput = ({ placeholder, label, type, id, ...rest }) => {
  const [inputType, setInputType] = useState("password");

  const handleChangeType = () => {
    if (inputType == "password") setInputType("text");
    else setInputType("password");
  };

  return (
    <div className="">
      <label htmlFor={id} className="block text-sm font-medium text-primary">
        {label}
      </label>
      <div className="relative">
        <input
          autoComplete="off"
          placeholder={placeholder ?? ""}
          type={type == "password" ? inputType : type}
          className="bg-white mt-1 block w-full rounded p-3 py-[14px] text-sm border outline-none focus:border-primary"
          id={id}
          {...rest}
        />
        {type == "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {inputType == "password" ? (
              <FiEye onClick={handleChangeType} />
            ) : (
              <FiEyeOff onClick={handleChangeType} />
            )}
          </button>
        )}

        {type == "data" && (
          <SlCalender className="absolute right-3 top-1/2 -translate-y-1/2" />
        )}
      </div>
    </div>
  );
};
