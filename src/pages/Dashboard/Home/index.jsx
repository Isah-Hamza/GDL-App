import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import {
  FaArrowRight,
  FaBell,
  FaCircleNotch,
  FaCogs,
  FaLongArrowAltRight,
  FaRing,
  FaUsers,
} from "react-icons/fa";
import {
  RiMoneyDollarBoxFill,
  RiCarFill,
  RiServerFill,
  RiDashboardFill,
  RiRestartFill,
} from "react-icons/ri";
import { BiMessageAltCheck, BiSearch, BiSearchAlt } from "react-icons/bi";
import MyAreaChart from "../../../components/Charts/AreaChart";
import DashboardLayout from "../../../layouts/DashboardLayout";
import MyTable from "../../../components/Tables/MyTable";
import { FiEye } from "react-icons/fi";

const Home = () => {
  const balances = [
    { title: "Balance", value: "$120,000", color: "green" },
    { title: "Income", value: "$283,000", color: "blue" },
    { title: "Expenses", value: "$95,400", color: "tomato" },
  ];

  const fleetSummary = [
    { title: "Active Users", value: 20 },
    { title: "Vehicles", value: 33 },
    { title: "Assigned Cards", value: 46 },
    { title: "Spare Cards", value: 160 },
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
    "Fleet Used",
    "Amount",
    "Status",
  ];

  return (
    <DashboardLayout>
      <>
        {" "}
        <div className=" flex items-center justify-between">
          <p className="text-lg font-semibold text-primary ">Dashboard</p>
          <div className="flex items-center gap-1">
            <RiDashboardFill className="text-primary" size={16} />
            <p className="text-sm">
              Revenue this month{" - "}
              <span className="font-semibold text-primary">NGN342,500</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="bg-white/90 rounded py-4">
            <p className="px-4  font-medium">Company-wide balance</p>
            <div className="px-4 flex justify-between mt-8">
              {balances.map((bal, idx) => (
                <div key={idx}>
                  <p className="text-sm">{bal.title}</p>
                  <h3 className="text-xl font-bold">{bal.value}</h3>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-xs border-t mt-8 pt-3 px-4">
              <div className="flex items-center gap-1 ">
                <RiRestartFill className="text-primary" size={16} />
                <p className="">
                  Next payout date due on:{" "}
                  <span className="text-primary font-medium">Feb 31, 2022</span>
                </p>
              </div>
              <button className="text-primary font-semibold hover:underline">
                Make a Payment
              </button>
            </div>
          </div>
          <div className="bg-white/90 rounded p-4 pb-0 flex flex-col">
            <div className="flex items-center justify-between ">
              <p className="font-medium">Your Spending History</p>
              <div className="text-xs flex items-center gap-3">
                <button>Weekly</button>
                <button className="bg-primary/80 px-3 py-1 text-white/90 rounded-lg ">
                  Monthly
                </button>
              </div>
            </div>
            <div className="mt-5 flex-1">
              <MyAreaChart height={130} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="py-4 bg-white/90 rounded">
            <p className="px-4 font-medium">Trips Summary Today</p>
            <div className="text-sm ">
              <div className="px-4 mt-5 flex justify-between items-center">
                <p>Completed</p>
                <p className="font-semibold text-primary">145</p>
              </div>
              <div className="px-4 mt-5 flex justify-between items-center">
                <p>Canceled</p>
                <p className="font-semibold text-primary">29</p>
              </div>
              <div className="px-4 mt-5 pt-3 flex justify-between items-center border-t">
                <p>Total Trips</p>
                <p className="font-semibold text-primary">174</p>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col p-4 bg-white/90 rounded">
            <p className="font-medium">Organizational Summary</p>
            <div className="flex flex-col flex-1">
              <div className="mt-5 flex gap-3 items-center text-sm">
                <p>This Month</p>
                <div className="w-32 h-2.5 bg-gray-100 rounded-lg">
                  <div className="rounded-lg bg-primary h-full w-3/5"></div>
                </div>
                <p className="ml-auto  font-semibold text-base">$36,300</p>
              </div>
              <div className="mt-5 flex gap-3 items-center text-sm">
                <p>Last Month</p>
                <div className="w-32 h-2.5 bg-gray-100 rounded-lg">
                  <div className="rounded-lg bg-primary h-full w-3/12"></div>
                </div>
                <p className="ml-auto  font-semibold text-base">$12,000</p>
              </div>
              <button className="hover:underline hover:font-medium transition-all ease-in-out duration-75 mt-auto flex items-center gap-3 text-xs justify-center">
                View Full Report{" "}
                <FaLongArrowAltRight className="text-primary" />{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-white/90 rounded">
            <p className=" font-medium">Fleet Summary</p>
            <div className="mt-5 grid grid-cols-2 gap-5 gap-y-3 flex-1">
              {fleetSummary.map((item, idx) => (
                <div key={idx}>
                  <p className="text-sm">{item.title}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="recent-transactions bg-white/90 rounded p-4 mt-5">
          <div className="flex justify-between items-center">
            <p className=" font-medium">Recent Transactions</p>
            <div className="flex items-center gap-1">
              <BiSearch size={17} />
              <input
                className="outline-none text-sm py-2 w-28"
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="mt-3">
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
                        onClick={() => navigate("#")}
                        className="hover:text-primary flex items-center gap-1"
                      >
                        <FiEye className="text-current" /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <MyTable
              table_header={recentTransactionTableHeader}
              table_body={recentTransactions}
            /> */}
          </div>
          <button className="w-full mt-5 hover:underline hover:font-medium transition-all ease-in-out duration-75 flex items-center gap-3 text-xs justify-center">
            View All Transactions{" "}
            <FaLongArrowAltRight className="text-primary" />{" "}
          </button>
        </div>
      </>
    </DashboardLayout>
  );
};

export default Home;
