import { useEffect } from "react";
import { useState } from "react";
import { getTableData, TableEnum } from "../server";
import LineChart from "./LineChart";

interface DataType {
  id: number;
  date: string;
  offline_sales: number;
  web_sales: number;
}

const Block4 = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res: DataType[] | null = await getTableData(TableEnum.TABLE_FOUR);
        if (res) {
          setData(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm shadow-gray-200 p-4 md:p-6">
      <p className="text-xl font-semibold">Customers by device</p>
      <div className="w-full mt-4">
        <LineChart data={data} />
      </div>

      <div className="flex gap-2 md:gap-4 mt-4">
        <div className="w-full">
          <div className="flex gap-2 items-center">
            <p>Web Sales</p>
            <div className="min-h-4 w-4 rounded-md bg-blue-600"></div>
          </div>
          <p className="text-sm font-semibold">1,304%</p>
        </div>
        <div className="w-full">
          <div className="flex gap-2 items-center">
            <p>Offline Sales</p>
            <div className="min-h-4 w-4 rounded-md bg-cyan-100"></div>
          </div>
          <p className="text-sm font-semibold">473%</p>
        </div>
      </div>
    </div>
  );
};

export default Block4;
