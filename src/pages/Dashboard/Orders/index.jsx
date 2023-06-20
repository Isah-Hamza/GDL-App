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
import { FiEye, FiPlus } from "react-icons/fi";
import { CustomInput } from "../../../components/Inputs/CustomInput";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [addNew, setAddNew] = useState(false);
  const navigate = useNavigate();

  const order_summary = [
    { title: "Total", value: 282 },
    { title: "Successful", value: 190 },
    { title: "Canceled", value: 43 },
    { title: "Suspended", value: 17 },
  ];
  const filter = [
    { label: "No Filter", value: 1 },
    { label: "Successful", value: 2 },
    { label: "Canceled", value: 3 },
    { label: "Suspended", value: 4 },
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
    "Source",
    "Destination",
    "Driver",
    "Passenger",
    "Amount",
    "Status",
    "",
  ];

  const fleet_assigned = [
    { label: "Assign Fleet", value: null },
    { label: "Mercedes", value: 1 },
    { label: "Hnda Accord", value: 2 },
    { label: "RAV4 Jeep", value: 2 },
    { label: "Toyota Corrolla", value: 2 },
    { label: "Landcruiser Jeep", value: 2 },
  ];

  const experience_level = [
    { label: "Experience Level", value: null },
    { label: "Below 2 Years", value: 1 },
    { label: "2-5 Years", value: 3 },
    { label: "6-10 Years", value: 4 },
    { label: "11-20 Years", value: 5 },
    { label: "20 and Above", value: 5 },
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
        <p className="text-lg font-semibold text-primary ">Orders</p>
        <div className="flex items-center gap-1">
          <RiCarFill className="text-primary" size={16} />
          <p className="text-sm">
            Orders this month{" - "}
            <span className="font-semibold text-primary">4,290 units</span>
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-4 gap-5">
          {order_summary.map((item, idx) => (
            <div
              className="text-center grid place-content-center bg-white/90 rounded p-5 h-32"
              key={idx}
            >
              <p className="text-lg font-semibold"> {item.value}</p>
              <p className="text-sm ">{item.title} Orders </p>
            </div>
          ))}
        </div>
        <section className="table bg-white/90 rounded mt-7 w-full p-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span>Filter By:</span>
              <div>
                <CustomSelect
                  className={"!h-[45px] !py-0 !w-40 !bg-blue-300]"}
                  options={filter}
                  allowFirstOption
                />
              </div>
            </div>
            <CustomButton
              clickHandler={() => setAddNew(true)}
              className={"!py-3 !px-7"}
              children={
                <div className="flex items-center gap-1 !text-sm">
                  <BiPlus size={20} color="#fff" className="text-white" />
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
                    <td>
                      <button
                        onClick={() => navigate("/orders/details")}
                        className="flex items-center gap-1"
                      >
                        <FiEye /> View
                      </button>
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
          <div className="h-screen bg-white w-[450px] p-7 py-5">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-primary capitalize ">
                Add new order
              </p>
              <button onClick={() => setAddNew(false)}>
                <FiPlus className="rotate-45" size={22} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-7">
              <CustomInput placeholder={"Driver Name"} id={"name"} />
              <CustomSelect options={fleet_assigned} />
              <CustomInput placeholder={"Passenger Name"} id={"passenger"} />
              <CustomInput placeholder={"Regisration Number"} id={"reg_no"} />
              <div className="col-span-2">
                <CustomInput placeholder={"Source"} id={"source"} />
              </div>
              <div className="col-span-2">
                <CustomInput placeholder={"Destination"} id={"destination"} />
              </div>
              {/* <CustomSelect options={experience_level} /> */}
              <CustomInput placeholder={"Date"} id={"Date"} />
              <CustomInput placeholder={"Time"} id={"Time"} />
              {/* <CustomSelect options={bike_status_options} /> */}
              <div className="col-span-2">
                <CustomButton className="w-full ml-auto mt-7 text-white text-sm flex items-center justify-center gap-2 px-5 py-2 rounded-md">
                  <BsCloudArrowUp size={20} /> Create Order
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </DashboardLayout>
  );
};

export default Orders;
