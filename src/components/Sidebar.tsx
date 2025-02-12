import campaingIcon from "../assets/icons/sidebar/campaing.svg";
import flowsIcon from "../assets/icons/sidebar/flows.svg";
import customersIcon from "../assets/icons/sidebar/customers.svg";
import integrationsIcon from "../assets/icons/sidebar/integrations.svg";
import settingsIcon from "../assets/icons/sidebar/setting.svg";
import teamIcon from "../assets/icons/sidebar/team.svg";
import dashboardIcon from "../assets/icons/sidebar/dashboard.svg";
import logoIcon from "../assets/logo.svg";

const Sidebar = () => {
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
    <div className="w-[20%] max-w-[300px] min-h-full bg-gray-100 p-4">
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
  );
};

export default Sidebar;
