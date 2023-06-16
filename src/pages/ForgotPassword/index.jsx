import React from "react";
import CustomButton from "../../components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import AuthPagesLayout from "../../layouts/AuthPagesLayout";
import { CustomInput } from "../../components/CustomInput";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <AuthPagesLayout>
      <div className="max-w-md mt-7">
        <div className="mt-10 md:mt-[unset] flex flex-col justify-between md:justify-start mb-5">
          <div className="">
            <p className="capitalize text-3xl md:text-2xl md:mb-2 mb-1 font-bold">
              {" "}
              Forgot your password?
            </p>
            <p className="text-sm text-appcolor-400">
              Don't panic. We've got you covered.
            </p>{" "}
          </div>
          <div className="mt-10">
            <CustomInput
              label={"Email Address"}
              placeholder={"Enter Your Email"}
              id={"email"}
            />{" "}
            <p className="mt-3 text-sm">
              Please enter the email you used while creating your{" "}
              <span className="text-primary font-medium">Rider </span>
              account. We'll send you a confirmation code and guide you through
              the reminaing process. New to GHL Rider?{" "}
              <Link to={"/register"} className="font-semibold text-primary">
                Register
              </Link>
            </p>
          </div>
          <div className="mt-7 flex justify-end">
            <CustomButton
              clickHandler={() => navigate("/new-password")}
              children={"Send Code"}
            />
          </div>
        </div>
      </div>
    </AuthPagesLayout>
  );
};

export default ForgotPassword;
