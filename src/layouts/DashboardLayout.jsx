import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BiMessageAltCheck } from "react-icons/bi";
import { FaBell, FaCogs, FaUsers } from "react-icons/fa";
import { RiCarFill, RiMoneyDollarBoxFill, RiServerFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const primarySideBarItems = [
    {
      title: "Home",
      icon: <AiTwotoneHome size={17} />,
    },
    {
      title: "Transactions",
      icon: <RiMoneyDollarBoxFill size={17} />,
    },
    {
      title: "Notificaions",
      icon: <FaBell size={17} />,
    },
    {
      title: "Vehicles",
      icon: <RiCarFill size={17} />,
    },
    {
      title: "Employees",
      icon: <FaUsers size={17} />,
    },
    {
      title: "Policies",
      icon: <RiServerFill size={17} />,
    },
    {
      title: "Statements",
      icon: <BiMessageAltCheck size={18} />,
    },
    {
      title: "Account Settings",
      icon: <FaCogs size={17} />,
    },
  ];

  const secondarySideBarItems = [
    "How to use Cards",
    "Terms and Conditions",
    "Help Center",
    "Logout",
  ];

  return (
    <div className="bg-[#efefef] w-full h-screen flex">
      <section className="w-[230px] left border-primary py-5 pt-6 flex flex-col h-full">
        <p className="px-7 text-sm font-mono font-semibold">Ghl Rider</p>
        <div className="flex-1 mt-7 flex flex-col">
          <ul>
            {primarySideBarItems.map((item, idx) => (
              <Link
                to={"#"}
                key={idx}
                className={`text-sm mb-1 px-7 py-2 flex gap-2.5 items-center hover:font-semibold hover:bg-slate-200 ${"hover:text-primary"}`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </ul>
          <ul className="mt-auto">
            {secondarySideBarItems.map((item, idx) => (
              <Link
                to={"#"}
                key={idx}
                className={`text-black/80 text-sm mb-1 px-7 py-1.5 flex gap-2.5 items-center hover:font-semibold hover:bg-slate-200 ${"hover:text-primary"}`}
              >
                {item}
              </Link>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-10 pb-10 h-screen overflow-auto flex flex-col flex-1 right py-3 pt-4">
        {children}
      </section>
    </div>
  );
};

export default DashboardLayout;
