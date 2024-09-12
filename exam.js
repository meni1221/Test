//Mission1
// Filtering the array and displaying only even numbers and returning a new array
const Mission1 = (x) => {
  return x.filter((x) => x % 2 === 0);
};

//Displaying a printout to test the function individually for myself
console.log(Mission1([12, 112, 4, 2, 1, 3, 5, 6]));

//
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

//Displaying a printout to test the function individually for myself
console.log(Mission2(["Mission2", "Levi", "Mosa", "Meni", "Mike"]));

//Mission3
//A function that accepts a two-dimensional array and turns it into a one-dimensional array
const Mission3 = (x) => {
    return x.reduce(function(a, b) {
        return a.concat(b);
    });;
};
let x = [[0, 0, 1],[4, 4, 5],]

//Displaying a printout to test the function individually for myself
console.log(Mission3(x));







