export const formatNumber = (num: number): string => {
    const numStr = num.toString();
    
    if (numStr.length <= 4) {
      return num.toLocaleString();
    }
    
    const roundedNum = Math.round(num / 1000);
    
    if (roundedNum.toString().length > 4) {
      return roundedNum.toLocaleString() + 'k';
    }
    
    return roundedNum + 'k';
  };
  