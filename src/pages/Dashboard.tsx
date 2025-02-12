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

      <div className="flex-grow p-2 md:p-4 flex flex-col lg:flex-row gap-2 md:gap-4">
        <div className="w-full lg:w-[70%]  h-full bg-white rounded-lg shadow-sm shadow-gray-200 flex flex-col justify-between">
          <Block1 />
          <Block2 />
          <Block6 />
        </div>

        <div className="w-full lg:w-[30%] h-full  flex lg:flex-col md:flex-row flex-col  gap-4">
          <Block3 />
          <Block4 />
          <Block5 />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
