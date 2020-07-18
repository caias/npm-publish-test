/**
 * addCommas
 */

const addCommas = (str) => {
  const num = str.replace(/,/g, "");
  while((/(-?[0-9]+)([0-9]{3})/).test(num)) {
    num = num.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
  }
  return num;
};

export default addCommas;