import React, { useEffect, useState } from "react";
import person1 from "../assets/images/person1.png";
import { CustomInput } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import OTPInput from "../components/OTPInput";
import CustomSelect from "../components/CustomSelect";

const AuthPagesLayout = () => {
  const counter = [1, 2, 3];
  const steps = ["Account Information", "Enter OTP", "Personal Information"];
  const [currStep, setCurrStep] = useState(1);

  useEffect(() => {
    console.log(currStep);
  }, [currStep]);

  return (
    <div className="flex w-full h-screen p-2">
      <section className="left flex flex-col py-10 px-4 text-white bg-primary rounded-md w-[330px]">
        <div>
          <p className="text-sm font-semibold">GDL RIDER</p>
          <div className="mt-16">
            <h2 className="text-4xl font-semibold">
              Start Your <br /> Journey With Us.
            </h2>
            <p className="mt-5">
              Discover the world’s best community of freelancers and business
              owners around the globe.
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <div className="w-full rounded-md bg-secondary p-3">
            <p className="text-sm">
              Simply unbelievable! I am really satisfied with my projects and
              business. This is Absolutely wonderful!
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img className="w-12" src={person1} alt="person1" />
              <div className="flex flex-col">
                <p className="font-bold">Timson Ka</p>
                <p className="text-sm">Professional</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            {counter.map((_, idx) => (
              <div
                key={idx}
                className="rounded-full bg-white w-1.5 h-1.5 flex items-center justify-center"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-primary ${
                    idx === 1 && "bg-white"
                  }`}
                >
                  {" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-4xl right flex-1 pt-14 px-20">
        <div>
          <p className="font-semibold text-3xl">Sign up</p>
          <p className="text-sm text-secondary-brown">
            Already have an account?{" "}
            <a href="#" className="text-blue-600">
              Login
            </a>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 border border-primary rounded-md overflow-hidden">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setCurrStep(idx + 1)}
              className={`p-3 text-sm flex items-center gap-2
              ${idx != 0 && "border-l"}
              ${currStep === idx + 1 && "font-semibold  text-primary"}`}
            >
              <p
                className={`w-6 h-6 rounded-full grid place-content-center border text-sm ${
                  currStep === idx + 1 && "border-2 border-primary"
                }`}
              >
                {idx + 1}
              </p>
              <p>{step}</p>
            </button>
          ))}
        </div>

        {currStep === 1 ? (
          <div className="mt-16">
            <div className="grid grid-cols-2 gap-5">
              <CustomInput
                label={"First Name"}
                placeholder={"Isah"}
                id={"first_name"}
              />
              <CustomInput
                label={"Last Name"}
                placeholder="Hamza"
                id={"last_name"}
              />{" "}
              <div className="col-span-2">
                <CustomInput
                  label={"Email"}
                  placeholder={"itshamzy@gmail.com"}
                  id={"email"}
                />{" "}
              </div>
              <CustomInput
                label={"Password"}
                placeholder={"********"}
                id={"password"}
                type={"password"}
              />{" "}
              <CustomInput
                label={"Confirm password"}
                placeholder={"********"}
                id={"confirm_password"}
                type={"password"}
              />{" "}
            </div>
            <div className=" mt-10 flex justify-end">
              <CustomButton
                clickHandler={() => setCurrStep(2)}
                className={"w-fit"}
                children={"Save and Next"}
              />
            </div>
          </div>
        ) : null}

        {currStep === 2 ? (
          <div className="mt-14">
            <p className="text-primary mb-4">
              Enter The OTP sent to your registerd email/phone number <br /> to
              move to the next step.
            </p>
            <OTPInput />{" "}
            <div className=" mt-10 flex">
              <CustomButton clickHandler={() => setCurrStep(3)} className={"w-fit"} children={"Confirm and Next"} />
            </div>
          </div>
        ) : null}

        {currStep === 3 ? (
          <div className=" mt-14">
            <div className="grid grid-cols-2 gap-5">
              <CustomInput
                label={"Company Name"}
                placeholder={"Dweller Inc."}
                id={"company_name"}
              />
              <CustomInput
                label={"CAC"}
                placeholder="080BCUQGRXP999/NG"
                id={"cac"}
              />{" "}
              <div className="col-span-2">
                <CustomInput
                  label={"Company Address"}
                  placeholder={"ABC Simple Street beside XYZ Town Hall"}
                  id={"company_address"}
                />{" "}
              </div>
              <CustomSelect
                label={"Select Country"}
                options={[
                  { label: "Nigeria", value: "nigeria" },
                  { label: "USA", value: "USA" },
                  { label: "Canada", value: "Canada" },
                  { label: "Ukraine", value: "Ukraine" },
                  { label: "Germany", value: "Germany" },
                ]}
              />{" "}
              <CustomSelect
                label={"Select State"}
                options={[
                  { label: "Abuja", value: "Abuja" },
                  { label: "Lagos", value: "Lagos" },
                  { label: "Ibadan", value: "Ibadan" },
                  { label: "Akwa-Ibon", value: "Akwa-Ibon" },
                  { label: "kaduna", value: "kaduna" },
                ]}
              />{" "}
            </div>
            <div className=" mt-7 flex justify-end">
              <CustomButton className={"w-fit"} children={"Create Account"} />
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default AuthPagesLayout;
