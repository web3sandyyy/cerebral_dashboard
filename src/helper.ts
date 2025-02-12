export const formatNumber = ({
  num,
  onlyK = false,
  onlyComma = false,
}: {
  num: number;
  onlyK?: boolean;
  onlyComma?: boolean;
}): string => {
  const numStr = num.toString();

  if (onlyComma) {
    return num.toLocaleString();
  }

  if (!onlyK && numStr.length <= 4) {
    return num.toLocaleString();
  }

  const roundedNum = Math.round(num / 1000);

  if (roundedNum.toString().length > 4) {
    return roundedNum.toLocaleString() + "k";
  }

  return roundedNum + "k";
};
