const CircleProgressBar = ({ percentage }: { percentage: number }) => {
  const calculateAngle = () => {
    const angle = (percentage / 100) * 180;
    return angle;
  };

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-end overflow-hidden">
      <div className="w-full  bg-gray-200 aspect-square rounded-full absolute left-0 top-0 p-4">
        <div className="w-full h-full rounded-full bg-white"></div>
      </div>

      <div
        style={{ transform: `rotate(${calculateAngle()}deg)` }}
        className="absolute left-0 top-[100%] w-full aspect-square absolute  origin-top overflow-hidden"
      >
        <div className="w-full h-full relative ">
          <div className="w-full h-full aspect-square rounded-full absolute left-0 bottom-1/2 border-[16px] border-blue-600"></div>
        </div>
      </div>

      <div className="relative z-10 ">
        <p className="text-2xl font-semibold text-center">{percentage}</p>
        <p className="text-sm text-gray-500 font-semibold mt-2">
          of 100 points
        </p>
      </div>
    </div>
  );
};

export default CircleProgressBar;
