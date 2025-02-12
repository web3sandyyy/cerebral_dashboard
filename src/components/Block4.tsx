import { useEffect } from "react";
import { useState } from "react";
import { getTableData, TableEnum } from "../server";

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
    <div>
      <p>Block 4</p>
      <div>
        {data && data.map((item: any) => <div key={item.id}>{item.date}</div>)}
      </div>
    </div>
  );
};

export default Block4;
