import { useEffect } from "react";
import { useState } from "react";
import { getTableData, TableEnum } from "../server";
import angleIcon from "../assets/icons/angle.svg";
import BarGraph from "./BarGraph";
export interface DataType {
  id: number;
  Last_year: number;
  Month: string;
  This_year: number;
}

const Block2 = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res: DataType[] | null = await getTableData(TableEnum.TABLE_TWO);
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
    <div className="w-full p-6">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">Comparison </p>

        <div className="flex items-center gap-1 border border-gray-300 p-2 px-3 rounded-full">
          <p>6 months</p>
          <img src={angleIcon} alt="angle" className="w-6 h-6" />
        </div>
      </div>

      <BarGraph from={0} to={40000} interval={10000} graphData={data} />
    </div>
  );
};

export default Block2;
