import { formatNumber } from "../helper";
import { DataType } from "./Block2";

const BarGraph = ({
  from,
  to,
  interval,
  graphData,
}: {
  from: number;
  to: number;
  interval: number;
  graphData: DataType[];
}) => {
  const difference = to - from;
  const times = difference / interval;

  const xAxis = Array.from(
    { length: times },
    (_, index) => from + index * interval
  ).reverse();

  const percentage = (value: number) => {
    return (value / to) * 100;
  };

  return (
    <div className="w-full mt-6">
      <div className="w-full flex ">
        <div>
          {xAxis.map((item, index) => (
            <div
              key={index}
              className="w-fit min-h-[60px] relative min-w-12 text-gray-500"
            >
              {index === 0 && (
                <p className="absolute top-0 -translate-y-1/2 right-1/2 translate-x-1/2">
                  {formatNumber({ num: to, onlyK: true })}
                </p>
              )}
              <p className="absolute  bottom-0 translate-y-1/2 right-1/2 translate-x-1/2 ">
                {formatNumber({ num: item, onlyK: true })}
              </p>
            </div>
          ))}
        </div>

        <div className="flex-grow flex justify-around gap-4 md:gap-6  ml-4 relative">
          {graphData.map((item, index) => (
            <div
              className="w-full max-w-24 h-full flex items-end  gap-2"
              key={index}
            >
              <div
                style={{ height: `${percentage(item.Last_year)}%` }}
                className="w-full  bg-cyan-200 rounded-md"
              ></div>
              <div
                style={{ height: `${percentage(item.This_year)}%` }}
                className="w-full bg-blue-600 rounded-md"
              ></div>
            </div>
          ))}

          <div className="absolute top-0 left-0 w-full h-full flex flex-col divide-y divide-gray-300/30 border-y border-gray-300/30">
            {xAxis.map((index) => (
              <div key={index} className="w-full min-h-[70px]"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex">
        <div className="w-12"></div>

        <div className="flex-grow ml-4">
          <div className="w-full flex">
            {graphData.map((item, index) => (
              <p
                key={index}
                className="text-gray-500 capitalize w-full text-center"
              >
                {item.Month}
              </p>
            ))}
          </div>

          <div className="w-full flex mt-6 gap-4 justify-center text-sm">
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4  bg-blue-600 rounded-md"></div>
              <p>This year</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="w-4 h-4  bg-cyan-200 rounded-md"></div>
              <p>Last year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
