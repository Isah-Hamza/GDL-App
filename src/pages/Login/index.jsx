import React from "react";
import AuthPagesLayout from "../../layouts/AuthPagesLayout";
import { Link } from "react-router-dom";
import { CustomInput } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const Login = () => {
  return (
    <AuthPagesLayout>
      <div className="mt-5">
        <p className="font-semibold text-3xl">Login</p>
        <p className="text-sm">
          Don't have an account yet?{" "}
          <Link to={"/register"} className="text-primary font-medium">
            Sign up
          </Link>
        </p>
      </div>
      <div className="col-span-2 grid gap-4 max-w-md mt-14">
        <p>
          Enter your credentials to proceed to your dashboard. Your security is
          our priority.
        </p>
        <CustomInput label={"Email"} placeholder={"Enter Your Email"} id={"email"} />{" "}
        <CustomInput
          label={"Password"}
          placeholder={"Enter Your Password"}
          id={"password"}
          type={"password"}
        />{" "}
        <div className="flex justify-between -mt-3 text-primary">
          <div className="flex gap-1 items-center justify-center">
            <input type="checkbox" id="remember-me" className="accent-current" />
            <label htmlFor="remember-me" className="mb-0 text-xs font-semibold">
              Remember me
            </label>
          </div>
          <div>
            <Link
              to={"/forgot-password"}
              className=" hover:underline font-semibold text-sm"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className=" mt-5 flex justify-end">
          <CustomButton
            clickHandler={() => setCurrStep(2)}
            className={"w-fit"}
            children={"Login"}
          />
        </div>
      </div>
    </AuthPagesLayout>
  );
};

export default Login;
