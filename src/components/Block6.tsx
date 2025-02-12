import { useEffect } from "react";
import { useState } from "react";
import { getTableData, TableEnum } from "../server";
import starIcon from "../assets/icons/star.svg";
import { formatNumber } from "../helper";

interface DataType {
  id: number;
  Product: string;
  rating: number;
  revenue: number;
  sold_amount: number;
  unit_price: number;
}

const Block6 = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res: DataType[] | null = await getTableData(TableEnum.TABLE_SIX);
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
    <div className="w-full p-4 md:p-6">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">Top Products </p>

        <div className=" border border-gray-300 p-2 px-3 rounded-full">
          <p>Full results</p>
        </div>
      </div>

      <div className="w-full mt-4 md:mt-6">
        <div className="grid grid-cols-6 gap-2 md:gap-4 text-gray-500 text-sm border-b border-gray-300 pb-2">
          <p className="col-span-2">Product</p>
          <p>Sold Amount</p>
          <p>Unit Price</p>
          <p>Revenue</p>
          <p>Rating</p>
        </div>
        {data.map((item) => (
          <div className=" grid grid-cols-6 gap-2 md:gap-4 text-sm text-gray-500 p-2" key={item.id}>
            <p className="text-base font-semibold text-gray-800 col-span-2">{item.Product}</p>
            <p>{item.sold_amount}</p>
            <p>${item.unit_price}</p>
            <p>${formatNumber({ num: item.revenue, onlyComma: true })}</p>
            <div className="text-base text-black flex items-center gap-1">
              <img src={starIcon} alt="star" className="w-3 h-3" />
              {item.rating}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Block6;
