import Block1 from "../components/Block1";
import Block2 from "../components/Block2";
import Block3 from "../components/Block3";
import Block4 from "../components/Block4";
import Block5 from "../components/Block5";
import Block6 from "../components/Block6";

const Dashboard = () => {
  return (
    <div className="min-h-[100dvh] w-full">
      Dashboard
      <div className="flex flex-col gap-4">
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
      </div>
    </div>
  );
};

export default Dashboard;
