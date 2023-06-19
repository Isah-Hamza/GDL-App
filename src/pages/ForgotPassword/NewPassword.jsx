import React from "react";
import AuthPagesLayout from "../../layouts/AuthPagesLayout";
import { CustomInput } from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import { Link } from "react-router-dom";

const NewPassword = () => {
  return (
    <AuthPagesLayout>
      <div className="max-w-md mt-7">
        <div className="mt-10 mb-5">
          <div>
            <p className="text-3xl md:text-2xl font-bold">
              {" "}
              New Password for Your Account
            </p>
            <p className="text-sm">
              Don't have an account yet?{" "}
              <Link to={"/register"} className="text-primary font-medium">
                Sign up
              </Link>
            </p>
            <p className="mt-10">
              Enter the OTP code sent to your Email here. It only takes 5mins to
              expire.
            </p>{" "}
          </div>
          <div className="flex flex-col gap-4 mt-3">
            <CustomInput
              label={"OTP Code"}
              placeholder={"Enter The OTP Here"}
              id={"otp"}
              autoComplete="off"
            />{" "}
            <CustomInput
              label={"New Password"}
              placeholder={"Enter a new password"}
              id={"password"}
              type={"password"}
              autoComplete="new-password"
            />{" "}
            <div className="flex justify-end mt-5">
              <CustomButton
                clickHandler={() => navigate("#")}
                children={"Save New Password"}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthPagesLayout>
  );
};

export default NewPassword;
