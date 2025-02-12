import { useState, useEffect } from "react";
import { getBlockData } from "../api";

interface DataType {
  negative: number;
  neutral: number;
  positive: number;
}

const Block5 = () => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    const getData = async () => {
      const res = await getBlockData(5);
      if (res) {
        setData(res);
        console.log(res);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm shadow-gray-200 p-4 md:p-6">
      <p className="text-sm  font-semibold text-gray-500">Community Feedback</p>
      <p className="text-xl font-semibold">Mostly Positive</p>

      <div className="w-full flex mt-2 md:mt-4 gap-1">
        <div
          style={{ width: `${data?.negative}%` }}
          className="min-h-2 rounded-full bg-red-300"
        ></div>
        <div
          style={{ width: `${data?.neutral}%` }}
          className="min-h-2 rounded-full bg-amber-300"
        ></div>
        <div
          style={{ width: `${data?.positive}%` }}
          className="min-h-2 rounded-full bg-green-300"
        ></div>
      </div>

      <div className="w-full flex gap-2 mt-2 md:mt-4">
        <div>
          <p className="text-xs text-gray-500">Negative</p>
          <p className="text-sm font-semibold">{data?.negative}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Neutral</p>
          <p className="text-sm font-semibold">{data?.neutral}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Positive</p>
          <p className="text-sm font-semibold">{data?.positive}</p>
        </div>
      </div>
    </div>
  );
};

export default Block5;
