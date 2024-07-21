var gcdOfStrings = function (str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;

  if (str1 + str2 != str2 + str1) {
    return "";
  }

  const gcd = (a, b) => {
    if (b == 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };
  let gcdLength = gcd(length1, length2);
  let result = str1.substring(0, gcdLength);

  return result;
};
