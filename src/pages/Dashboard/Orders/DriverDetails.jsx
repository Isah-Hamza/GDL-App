import React, { useState } from "react";
import { RiCarFill } from "react-icons/ri";
import DashboardLayout from "../../../layouts/DashboardLayout";
import CustomButton from "../../../components/Buttons/CustomButton";
import { FaLongArrowAltRight } from "react-icons/fa";

const DriverDetails = () => {
  const [isActive, setIsActive] = useState(true);
  const [editFields, setEditFields] = useState(false);
  const [changeStatus, setChangeStatus] = useState(false);

  const user = {
    firstName: "Ridiculous",
    lastName: "Person",
    roleDefination: "Driver",
    isViewTransaction: false,
  };

  const staffDetails = [
    {
      title: "Email",
      value: `itshamzy@gmail.com`,
      name: "email",
      editable: false,
    },
    {
      title: "Date Created",
      value: `12th-Aug-2020`,
      name: "dateCreated",
      editable: false,
      smallFont: true,
    },
    {
      title: "Status",
      value: `Unavailable`,
      name: "status",
      editable: false,
    },
    {
      title: "Phone",
      value: `07065786031`,
      name: "phone",
      editable: false,
    },
    {
      title: "Account Level",
      value: `Level 2`,
      name: "accountLevel",
      editable: false,
    },
    {
      title: "Able to Login",
      value: `No`,
      name: "isLoginPermit",
      type: "select",
      editable: false,
      options: [
        { name: "Yes", value: true },
        { name: "No", value: false },
      ],
    },
    {
      title: "Able to View Tranx.",
      value: `${user.isViewTransaction ? "Yes" : "No"}`,
      name: "isViewTransaction",
      type: "select",
      editable: false,
      options: [
        { name: "Yes", value: true },
        { name: "No", value: false },
      ],
    },
    {
      title: "Designation",
      value: `Technician`,
      name: "role",
      editable: false,
    },

    {
      title: "Address",
      value: `ABC Simple street.`,
      name: "address",
      editable: false,
    },
  ];

  const activitySummary = [
    { title: "Active", value: 20 },
    { title: "Inactive", value: 33 },
    { title: "On Leave ", value: 4 },
    { title: "Suspended", value: 0 },
  ];

  return (
    <DashboardLayout>
      <div className=" flex items-center justify-between">
        <p className="text-lg font-semibold text-primary ">Driver Details</p>
        <div className="flex items-center gap-1">
          <RiCarFill className="text-primary" size={16} />
          <p className="text-sm">
            Recruited this month{" - "}
            <span className="font-semibold text-primary">42 drivers</span>
          </p>
        </div>
      </div>
      <div className="bg-white rounded mt-6">
        <div className="p-5 border-b gap-10 md:gap-2 flex flex-col md:flex-row justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-xl">
                {user?.firstName} {user?.lastName}
              </p>
              <p
                // onClick={toggleChangeStatus}
                role="button"
                className={`${
                  isActive
                    ? "bg-blue-100 text-blue-800"
                    : "bg-[coral] text-white"
                } relative text-xs -mt-3 font-semibold px-3 py-1 rounded-sm tracking-wide`}
              >
                {isActive ? "Active" : "Inactive"}
                {changeStatus && (
                  <button
                    // onClick={handleChangeStatus}
                    className={`${
                      isActive
                        ? "bg-coral text-white"
                        : "bg-blue-100 text-blue-800"
                    } px-3 py-1 bg-[coral] rounded w-[90px] z-10 absolute top-8 left-0`}
                  >
                    {isActive ? "Deactivate" : "Activate"}
                  </button>
                )}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm capitalize">{user.roleDefination}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CustomButton
              //   onClick={handleEdit}
              className="text-white rounded px-7 !py-1 !h-[45px] text-sm"
            >
              {editFields ? "Discard Changes" : "Edit Fields"}
            </CustomButton>
            <CustomButton
              type="button"
              //   onClick={() => setModalOpen(true)}
              className="text-white hover:bg-red-700 transition-all duration-500 ease-in bg-red-500 rounded px-7 !h-[45px] text-sm"
            >
              Delete this user
            </CustomButton>
          </div>
        </div>
        <form
          //   onSubmit={formik.handleSubmit}
          className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7  gap-x-10 sm:gap-x-5 items-center p-5"
        >
          <>
            {staffDetails.map((prop, idx) => (
              <div key={idx}>
                <p className="opacity-80 text-sm">{prop.title}</p>
                <>
                  {editFields ? (
                    <>
                      {prop.type === "select" ? (
                        <select
                          //   onChange={formik.handleChange}
                          name={prop.name}
                          className="w-full h-[38px]"
                        >
                          {prop.options.map((obj) => (
                            <option
                              selected={prop.value == obj.name}
                              value={obj.value}
                              key={obj.value}
                            >
                              {obj.name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          readOnly={prop.editable ? false : true}
                          name={prop.name}
                          className="w-full text-sm border outline-none px-3 py-2 "
                          type={"text"}
                          defaultValue={prop.value}
                        />
                      )}
                    </>
                  ) : (
                    <p
                      className={`mt-0 text-base font-semibold opacity-90 ${
                        prop.smallFont && "!text-sm"
                      }`}
                    >
                      {prop.value}
                    </p>
                  )}
                </>
              </div>
            ))}
            <CustomButton
              type="button"
              //   disabled={!editFields}
              //   onClick={handleUpdateMember}
              className="col-start-2 sm:col-start-3 md:col-start-4 w-fit mt-4 md:mt-auto ml-auto disabled:bg-opacity-70 text-white bg-green-500 rounded px-7 py-2 text-sm"
            >
              Save Changes
            </CustomButton>
          </>
        </form>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="py-4 bg-white/90 rounded">
          <p className="px-4 font-medium"> Trips Undertaken</p>
          <div className="text-sm ">
            <div className="px-4 mt-6 flex justify-between items-center">
              <p>Last 7 Days</p>
              <p className="font-semibold text-primary">24</p>
            </div>
            <div className="px-4 mt-6 flex justify-between items-center">
              <p>Last Month</p>
              <p className="font-semibold text-primary">145</p>
            </div>
            <div className="px-4 mt-6 pt-3 flex justify-between items-center border-t">
              <p>Aug. Forecast</p>
              <p className="font-semibold text-primary">190</p>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col p-4 bg-white/90 rounded">
          <p className="font-medium">Monthly Returns to GHL</p>
          <div className="flex flex-col flex-1">
            <div className="mt-4 flex gap-3 items-center text-sm">
              <p>This Month</p>
              <div className="w-32 h-2.5 bg-gray-100 rounded-lg">
                <div className="rounded-lg bg-primary h-full w-3/5"></div>
              </div>
              <p className="ml-auto  font-semibold text-base">$36,300</p>
            </div>
            <div className="mt-4 flex gap-3 items-center text-sm">
              <p>Last Month</p>
              <div className="w-32 h-2.5 bg-gray-100 rounded-lg">
                <div className="rounded-lg bg-primary h-full w-3/12"></div>
              </div>
              <p className="ml-auto  font-semibold text-base">$12,000</p>
            </div>
            {/* <div className="mt-4 flex gap-3 items-center text-sm">
              <p>This Year</p>
              <div className="w-32 h-2.5 bg-gray-100 rounded-lg">
                <div className="rounded-lg bg-primary h-full "></div>
              </div>
              <p className="ml-auto  font-semibold text-base">$257,000</p>
            </div> */}
            <button className="hover:underline hover:font-medium transition-all ease-in-out duration-75 mt-auto flex items-center gap-3 text-xs justify-center">
              View Full Report <FaLongArrowAltRight className="text-primary" />{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white/90 rounded">
          <p className=" font-medium">Availability Summary</p>
          <div className="mt-5 grid grid-cols-2 gap-5 gap-y-3 flex-1">
            {activitySummary.map((item, idx) => (
              <div key={idx}>
                <p className="text-sm">{item.title}</p>
                <p className="font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DriverDetails;
