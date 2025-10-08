// Bài 1
let fruits = ["Táo", "Chuối", "Cam"];
fruits.push("Nho");
let removedFruit = fruits.pop();
console.log("Bài 1:", fruits, "removedFruit =", removedFruit);
// Bài 2
let colors = ["Đỏ", "Xanh", "Vàng"];
colors.unshift("Tím");
let firstColor = colors.shift();
console.log("Bài 2:", colors, "firstColor =", firstColor);
// Bài 3
let numbers = [10, 20, 30, 40, 50, 60];
let slicedNumbers = numbers.slice(2, 4);
console.log("Bài 3: sliced =", slicedNumbers, "original =", numbers);
// Bài 4
let animals = ["Chó", "Mèo", "Gà", "Vịt"];
animals.splice(1, 2, "Cáo", "Sói");
console.log("Bài 4:", animals);
// Bài 5
let veggies = ["Cà rốt", "Bắp cải"];
let fruits2 = ["Táo", "Cam"];
let foodList = veggies.concat(fruits2);
console.log("Bài 5: foodList =", foodList, "veggies =", veggies, "fruits =", fruits2);
// Bài 6
let students = [{name: "An", score: 8}, {name: "Bình", score: 7}];
students.push(
  {name: "Cường", score: 9},
  {name: "Dung", score: 6},
  {name: "Hà", score: 10},
  {name: "Linh", score: 5},
  {name: "Minh", score: 8}
);
students.pop();
students.sort((a, b) => b.score - a.score);
console.log("Bài 6:", students);
// Bài 7
let scores = [85, 92, 78, 90];
console.log("Bài 7:");
scores.forEach(score => console.log("Điểm:", score));
// Bài 8
let prices = [100000, 200000, 150000];
let increasedPrices = prices.map(p => p * 1.2);
console.log("Bài 8:", increasedPrices);
// Bài 9
let ages = [15, 22, 18, 30, 17];
let adultAges = ages.filter(age => age >= 18);
console.log("Bài 9:", adultAges);
// Bài 10
let users = [
  {name: "An", age: 25},
  {name: "Bình", age: 30},
  {name: "Cường", age: 28}
];
let foundUser = users.find(u => u.name === "Bình");
let indexUser = users.findIndex(u => u.age === 28);
console.log("Bài 10: found =", foundUser, "index =", indexUser);
// Bài 11
let expenses = [50000, 120000, 80000];
let totalExpense = expenses.reduce((sum, x) => sum + x, 0);
console.log("Bài 11: Tổng =", totalExpense);
// Bài 12
let temps = [25, 18, 30, 22];
temps.sort((a, b) => a - b);
console.log("Bài 12:", temps);
// Bài 13
let stocks = [true, false, true];
let someOutOfStock = stocks.some(s => s === false);
let allInStock = stocks.every(s => s === true);
console.log("Bài 13: some =", someOutOfStock, "every =", allInStock);
// Bài 14
let days = ["Thứ 2", "Thứ 3", "Thứ 4"];
let reversedDays = days.reverse();
let joinedDays = reversedDays.join("-");
console.log("Bài 14:", joinedDays);
