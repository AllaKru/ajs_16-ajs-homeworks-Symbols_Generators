/* eslint-disable no-console */
export default function canIterate(obj) {
  try {
    if (obj[Symbol.iterator]) {
      console.log(typeof obj, true);
      return true;
    }
    console.log(typeof obj, false);
    return false;
  } catch (e) {
    console.log(typeof obj, false);
    return false;
  }
}

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate('Netology'); // true
canIterate([]);
canIterate(undefined);
