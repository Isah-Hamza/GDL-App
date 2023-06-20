import React, { useEffect, useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BiMessageAltCheck } from "react-icons/bi";
import { FaBell, FaCogs, FaUsers } from "react-icons/fa";
import { RiCarFill, RiMoneyDollarBoxFill, RiServerFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [activeLink, setActiveLink] = useState(() => {
    const url = window.location.pathname.split("/")[1];
    return url;
  });

  useEffect(() => {
    console.log(activeLink);
  }, []);

  const primarySideBarItems = [
    {
      title: "Dashboard",
      id: "dashboard",
      url: "/dashboard",
      icon: <AiTwotoneHome size={17} />,
    },
    {
      title: "My Fleets",
      id: "fleets",
      url: "/fleets",
      icon: <RiCarFill size={17} />,
    },
    {
      title: "Drivers",
      id: "drivers",
      url: "/drivers",
      icon: <FaUsers size={17} />,
    },
    {
      title: "Orders",
      id: "orders",
      url: "/orders",
      icon: <RiMoneyDollarBoxFill size={17} />,
    },
    {
      title: "Notificaions",
      id: "notificaions",
      url: "/notification",
      icon: <FaBell size={17} />,
    },
    {
      title: "Expenses",
      id: "expenses",
      url: "/expenses",
      icon: <BiMessageAltCheck size={18} />,
    },
    // {
    //   title: "Policies",
    //   icon: <RiServerFill size={17} />,
    // },
    // {
    //   title: "Account Settings",
    //   icon: <FaCogs size={17} />,
    // },
  ];

  const secondarySideBarItems = [
    // "How to use Cards",
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
                to={item.url}
                key={idx}
                className={`text-sm mb-1 px-7 py-2 flex gap-2.5 items-center hover:font-semibold hover:bg-slate-200 hover:text-primary  ${
                  activeLink.includes(item.id) && "!text-primary font-bold hover:font-bold"
                }  `}
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
