export const formatPrice = (value?: string | number, decimalCount?: number) => {
  const decimalLength = decimalCount || 6;
  if (!value) {
    return "0";
  } else {
    const splitPoint = value.toString().split(".");
    if (splitPoint[1] && splitPoint[1].length >= decimalLength) {
      return `${splitPoint[0].replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      )}.${splitPoint[1].slice(0, decimalLength)}`;
    } else {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
