import campaingIcon from "../assets/icons/sidebar/campaing.svg";
import flowsIcon from "../assets/icons/sidebar/flows.svg";
import customersIcon from "../assets/icons/sidebar/customers.svg";
import integrationsIcon from "../assets/icons/sidebar/integrations.svg";
import settingsIcon from "../assets/icons/sidebar/setting.svg";
import teamIcon from "../assets/icons/sidebar/team.svg";
import dashboardIcon from "../assets/icons/sidebar/dashboard.svg";
import logoIcon from "../assets/logo.svg";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setOpenSidebar(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setOpenSidebar]);

  const menuItems1 = [
    {
      name: "Settings",
      icon: settingsIcon,
    },
    {
      name: "Team",
      icon: teamIcon,
    },
  ];

  const menuItems2 = [
    {
      name: "Dashboard",
      icon: dashboardIcon,
    },
    {
      name: "Campaigns",
      icon: campaingIcon,
    },
    {
      name: "Flows",
      icon: flowsIcon,
    },
    {
      name: "Integrations",
      icon: integrationsIcon,
    },
    {
      name: "Customers",
      icon: customersIcon,
    },
  ];

  return (
    <>
      <div
        className={`${
          openSidebar
            ? " w-[80%] fixed left-0 "
            : "w-[20%] hidden xl:block xl:sticky"
        } max-w-[300px] h-[100dvh] bg-gray-100 p-4  top-0 z-50`}
      >
        <div className="flex items-center gap-2 px-6">
          <img src={logoIcon} alt="logo" className="w-6 h-6" />
          <p className="text-xl font-bold text-center">Salesway</p>
        </div>

        <div className="flex flex-col gap-2 mt-6 font-semibold text-gray-500">
          {menuItems1.map((item, index) => (
            <div
              className="flex items-center gap-4 px-6 py-2 rounded-md hover:bg-gray-200 duration-100"
              key={index}
            >
              <img src={item.icon} alt={item.name} className="w-5 h-5" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <p className="text-sm font-semibold mt-6 px-6 text-gray-500">MENU</p>

        <div className="flex flex-col gap-4 mt-2 font-semibold text-gray-500">
          {menuItems2.map((item, index) => (
            <div
              className={`flex items-center gap-4 px-6 py-2 rounded-md duration-100 ${
                item.name === "Dashboard"
                  ? "bg-white text-black shadow-sm shadow-gray-200"
                  : "hover:bg-gray-200"
              }`}
              key={index}
            >
              <img src={item.icon} alt={item.name} className="w-5 h-5" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:hidden p-4 pb-0 flex justify-between items-center">
        <div className="flex items-center gap-2 px-6">
          <img src={logoIcon} alt="logo" className="w-6 h-6" />
          <p className="text-xl font-bold text-center">Salesway</p>
        </div>

        <div
          onClick={() => setOpenSidebar(!openSidebar)}
          className="flex flex-col items-center gap-1 "
        >
          <div
            className={`${
              openSidebar ? "rotate-135 translate-y-1" : ""
            } border-2 border-gray-500 w-6 rounded-full duration-200 `}
          ></div>
          <div
            className={`${
              openSidebar ? "-rotate-135 -translate-y-1" : ""
            } border-2 border-gray-500 w-6 rounded-full duration-200`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
