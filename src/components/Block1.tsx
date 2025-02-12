import { useState, useEffect } from "react";
import { getBlockData } from "../api";

interface DataType {
  purchases: number;
  revenue: number;
  refunds: number;
}

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
    <div>
      <p>Block 1</p>
      {data && (
        <div>
          <div>Purchases: {data.purchases}</div>
          <div>Revenue: {data.revenue}</div>
          <div>Refunds: {data.refunds}</div>
        </div>
      )}
    </div>
  );
};

export default Block1;
