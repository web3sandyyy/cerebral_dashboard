import { useState, useEffect } from "react";
import { getBlockData } from "../api";
import CircleProgressBar from "./CircleProgressBar";

interface DataType {
  score: number;
  message: number;
  title: number;
}

const Block3 = () => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    const getData = async () => {
      const res = await getBlockData(3);
      if (res) {
        setData(res);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm shadow-gray-200 p-6  ">
      <div className="w-4/5 aspect-[2/1] mx-auto max-w-[250px]">
        {data && <CircleProgressBar percentage={data.score} />}
      </div>

      {data && (
        <div className="border-t border-gray-200 mt-6 pt-6">
          <div>
            <p className="text-xl font-semibold">{data.title}</p>
            <p className=" text-gray-500 mt-2">{data.message}</p>
            <p className="text-sm text-gray-500 font-semibold mt-6 p-2 px-3 rounded-full border border-gray-200 w-fit">
              Improve your score
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Block3;
