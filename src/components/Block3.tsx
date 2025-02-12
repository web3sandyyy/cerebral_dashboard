import { useState, useEffect } from "react";
import { getBlockData } from "../api";

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
    <div>
      <p>Block 3</p>
      {data && (
        <div>
          <div>{data.title}</div>
          <div>{data.message}</div>
          <div>{data.score}</div>
        </div>
      )}
    </div>
  );
};

export default Block3;
