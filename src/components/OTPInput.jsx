import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function OTPInput() {
  const [otp, setOtp] = useState("");

  const style = {};

  return (
    <div className="otp">
      <OtpInput
        value={otp}
        onChange={(val) => setOtp(val)}
        numInputs={5}
        renderSeparator={<div className="w-6"></div>}
        inputStyle={{
          width: "4em",
          height: "4em",
          display: "grid",
          placeContent: "center",
          border: "1px solid gainsboro",
          outline: "1px solid #540A18",
          borderRadius: 4,
          color: "#540A18",
        }}
        renderInput={(props) => (
          <input
            style={{ border: "1px solid " }}
            className="border"
            {...props}
          />
        )}
      />
    </div>
  );
}
