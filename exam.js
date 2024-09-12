//Mission1
// Filtering the array and displaying only even numbers and returning a new array
const Mission1 = (x) => {
  return x.filter((x) => x % 2 === 0);
};

//Mission2
//A function that returns the number of words containing four letters
const Mission2 = (x) => {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i].length == 4) {
      result.push(x[i]);
    }
  }
  return result.length;
};

//Mission3
//A function that accepts a two-dimensional array and turns it into a one-dimensional array
const Mission3 = (x) => {
  return x.reduce(function (a, b) {
    return a.concat(b);
  });
};
let x = [
  [0, 0, 1],
  [4, 4, 5],
];


module.exports = {
    Mission1,
    Mission2,
    Mission3
}
//Without 4 and 5 and 6

