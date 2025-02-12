import Block1 from "../components/Block1";
import Block2 from "../components/Block2";
import Block3 from "../components/Block3";
import Block4 from "../components/Block4";
import Block5 from "../components/Block5";
import Block6 from "../components/Block6";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-[100dvh] w-full flex bg-gray-100 ">
      <Sidebar />

      <div className="flex-grow p-4 flex gap-4">
        <div className="w-[70%] h-full bg-white rounded-lg shadow-sm shadow-gray-200">
          <Block1 />
        </div>

        <div className="w-[30%] h-full bg-red-500"></div>
      </div>
    </div>
  );
};

export default Dashboard;
