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
      }
    };
    getData();
  }, []);

  return (
    <div>
      <p>Block 5</p>
      {data && (
        <div>
          <div>Negative: {data.negative}</div>
          <div>Neutral: {data.neutral}</div>
          <div>Positive: {data.positive}</div>
        </div>
      )}
    </div>
  );
};

export default Block5;
