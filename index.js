const getFirstNames = require("../utilities/utils/index");
const list = require("../country/state/city/index");

const getpeoplenames = (list) => {
  return getFirstNames(list);
};
console.log(getpeoplenames);
