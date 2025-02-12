import { useEffect } from "react";
import { useState } from "react";
import { getTableData, TableEnum } from "../server";

interface DataType {
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
    <div>
      <p>Block 2</p>
      <div>
        {data &&
          data.map((item: any) => <div key={item.id}>{item.Last_year}</div>)}
      </div>
    </div>
  );
};

export default Block2;
