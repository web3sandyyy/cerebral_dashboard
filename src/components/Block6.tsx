import { useEffect } from "react";
import { useState } from "react";
import { getTableData, TableEnum } from "../server";

interface DataType {
  id: number;
  product: string;
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
    <div>
      <p>Block 6</p>
      <div>
        {data &&
          data.map((item: any) => (
            <div key={item.id}>
              <div>Product: {item.product}</div>
              <div>Rating: {item.rating}</div>
              <div>Revenue: {item.revenue}</div>
              <div>Sold Amount: {item.sold_amount}</div>
              <div>Unit Price: {item.unit_price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Block6;
