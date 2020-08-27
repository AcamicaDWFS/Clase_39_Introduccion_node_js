let add = (num1, num2) => {
  return { res: num1 + num2, string: `${num1} + ${num2} = ` };
};

let sub = (num1, num2) => {
  return { res: num1 - num2, string: `${num1} - ${num2} = ` };
};

let mul = (num1, num2) => {
  return { res: num1 * num2, string: `${num1} * ${num2} = ` };
};

let div = (num1, num2) => {
  return { res: num1 / num2, string: `${num1} / ${num2} = ` };
};

module.exports = { add, sub, mul, div };
