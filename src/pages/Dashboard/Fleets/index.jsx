import React, { useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { RiCarFill } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { BsCloudArrowUp } from "react-icons/bs";
import { FaTimes, FaUserTimes } from "react-icons/fa";
import {} from "react-icons/ri";
import {} from "react-icons";
import CustomSelect from "../../../components/Inputs/CustomSelect";
import CustomButton from "../../../components/Buttons/CustomButton";
import { BiPlus } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { CustomInput } from "../../../components/Inputs/CustomInput";

const Fleets = () => {
  const [addNew, setAddNew] = useState(false);

  const fleet_summary = [
    { title: "Total", value: 156 },
    { title: "Active", value: 98 },
    { title: "Maintained", value: 12 },
    { title: "Brokedown", value: "02" },
  ];
  const filter = [
    { label: "No Filter", value: 1 },
    { label: "Active", value: 2 },
    { label: "Maintained", value: 3 },
    { label: "Brokedown", value: 4 },
  ];

  const recentTransactions = [
    {
      date: "12th Aug, 2022",
      merchant: "Uber",
      category: "Fuel",
      person: "Isah Hamza",
      department: "Services",
      amount: "$12,000",
      status: "pending",
    },
    {
      date: "9th Dec, 2020",
      merchant: "WhoGoHost",
      category: "Resource",
      person: "John Nemesis",
      department: "Spare Parts",
      amount: "$2,000",
      status: "canceled",
    },
    {
      date: "31st Feb, 2023",
      merchant: "Ali Express",
      category: "Revenue",
      person: "Gbenga Moses",
      department: "Repairs",
      amount: "$25,000",
      status: "completed",
    },
  ];

  const recentTransactionTableHeader = [
    "Date",
    "Merchant",
    "Category",
    "Person",
    "Department",
    "Amount",
    "Status",
  ];

  const type_options = [
    { label: "Select Type", value: null },
    { label: "Automatic", value: 1 },
    { label: "Manual", value: 2 },
  ];

  const color_options = [
    { label: "Select Color", value: null },
    { label: "White", value: 1 },
    { label: "Blue", value: 2 },
    { label: "Green", value: 3 },
    { label: "Red", value: 4 },
    { label: "Purple", value: 5 },
  ];

  const bike_status_options = [
    { label: "Select Grade", value: null },
    { label: "Grade 1", value: 1 },
    { label: "UK Used", value: 2 },
    { label: "Nigerian Used", value: 3 },
  ];

  return (
    <DashboardLayout>
      <div className=" flex items-center justify-between">
        <p className="text-lg font-semibold text-primary ">My Fleets</p>
        <div className="flex items-center gap-1">
          <RiCarFill className="text-primary" size={16} />
          <p className="text-sm">
            New fleets this month{" - "}
            <span className="font-semibold text-primary">42 units</span>
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-4 gap-5">
          {fleet_summary.map((item, idx) => (
            <div
              className="text-center grid place-content-center bg-white/90 rounded p-5 h-28"
              key={idx}
            >
              <p className="text-lg font-semibold"> {item.value}</p>
              <p className="text-sm ">{item.title} Fleets </p>
            </div>
          ))}
        </div>
        <section className="table bg-white/90 rounded mt-10 w-full p-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span>Filter By:</span>
              <div>
                <CustomSelect
                  className={"h-10 !py-0 !w-40 !bg-blue-300]"}
                  options={filter}
                  allowFirstOption
                />
              </div>
            </div>
            <CustomButton
              clickHandler={() => setAddNew(true)}
              className={"!py-3"}
              children={
                <div className="flex items-center gap-1">
                  <BiPlus size={24} color="#fff" className="text-white" />
                  <span>Add New</span>
                </div>
              }
            />
          </div>
          <div className="mt-5">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="bg-[#f7f9fb] shadow">
                  {recentTransactionTableHeader.map((item, idx) => (
                    <th
                      key={idx}
                      className={`text-left !font-semibold py-2 ${
                        idx == 0 && "pl-3"
                      }`}
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((trnx, idx) => (
                  <tr key={idx} className="pt-2">
                    <td className="pl-3">{trnx.date}</td>
                    <td>{trnx.merchant}</td>
                    <td>{trnx.category}</td>
                    <td>{trnx.person}</td>
                    <td>{trnx.department}</td>
                    <td>{trnx.amount}</td>
                    <td>
                      <span className={`${trnx.status}`}>{trnx.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      {addNew ? (
        <div className="fixed inset-0 bg-black/60 overflow-hidden flex justify-end">
          <div className="h-screen bg-white w-[450px] p-7">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-primary ">
                Add new fleet
              </p>
              <button onClick={() => setAddNew(false)}>
                <FiPlus className="rotate-45" size={22} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <CustomInput placeholder={"Name"} id={"name"} />
              <CustomSelect options={type_options} />
              <CustomSelect options={color_options} />
              <CustomInput placeholder={"Regisration Number"} id={"reg_no"} />
              <CustomInput placeholder={"Model"} id={"model"} />
              <CustomSelect options={bike_status_options} />
              <div className="col-span-2">
                <div className="w-full">
                  <p className="text-sm font-semibold mb-2">
                    Upload Fleet Image Here...
                  </p>
                  <div className="text-center text-sm border-2 border-dashed w-full h-52 grid place-content-center">
                    <button
                      type="button"
                      className="text-appcolor px-5 py-2 rounded-md"
                    >
                      + Select File
                    </button>
                    <p className="text-xs">or drag and drop folder here.</p>
                  </div>
                </div>
                <CustomButton className="w-full bg-appcolor ml-auto mt-7 text-white text-sm flex items-center justify-center gap-2 px-5 py-2 rounded-md">
                  <BsCloudArrowUp size={20} /> Upload Fleet
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </DashboardLayout>
  );
};

export default Fleets;
