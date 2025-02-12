import { useState, useEffect } from "react";
import { getBlockData } from "../api";
import angleIcon from "../assets/icons/angle.svg";
import growIcon from "../assets/icons/grow.svg";
import lossIcon from "../assets/icons/loss.svg";
import { formatNumber } from "../helper";

interface DataType {
  purchases: number;
  revenue: number;
  refunds: number;
}

const Card = ({
  title,
  value,
  percentage,
  isCurrency = false,
}: {
  title: string;
  value: number;
  percentage: string;
  isCurrency?: boolean;
}) => {
  return (
    <div className="w-full border border-gray-200 p-4 rounded-lg ">
      <p className="text-sm font-semibold text-gray-500">{title}</p>
      <div className="flex items-center gap-2 mt-4">
        <p className="text-2xl font-semibold">
          {isCurrency ? `$${formatNumber({ num: value })}` : formatNumber({ num: value })}
        </p>
        <div
          className={` border rounded-full p-1 px-2 text-xs flex items-center gap-1 ${
            percentage.includes("-")
              ? "border-red-400 bg-red-100"
              : "bg-green-100  border-green-400"
          }`}
        >
          <p>{percentage}%</p>
          <img
            src={percentage.includes("+") ? growIcon : lossIcon}
            alt="icon"
            className="w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

const Block1 = () => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    const getData = async () => {
      const res = await getBlockData(1);
      if (res) {
        setData(res);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full rounded-t-lg p-6">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold">Dashboard</p>

        <div className="flex items-center gap-2">
          <p>Compare to</p>

          <div className="flex items-center gap-1 border border-gray-300 p-2 px-3 rounded-full">
            <p>Last year</p>
            <img src={angleIcon} alt="angle" className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="w-full mt-6 gap-4 grid grid-cols-3">
        <Card
          title="Purchases"
          value={data?.purchases || 0}
          percentage={"+42"}
        />
        <Card
          title="Revenue"
          value={data?.revenue || 0}
          percentage={"+49"}
          isCurrency={true}
        />
        <Card
          title="Refunds"
          value={data?.refunds || 0}
          percentage={"-7"}
          isCurrency={true}
        />
      </div>
    </div>
  );
};

export default Block1;
