// Object masalasi
// function obj() {
//   let ism = prompt("Ismingizni kiriting:");
//   let telefon = prompt("Telefon raqamingizni kiriting:");
//   let manzil = prompt("Yashash manzilingizni kiriting:");
//   let information = {
//     ism: ism,
//     telefon: telefon,
//     manzil: manzil,
//   };
//   return information;
// }
// console.log(obj());

// 46 misol
// function sliceArray(arr, n) {
//   return arr.slice(n);
// }
// console.log(sliceArray([0, 4, 8, 5, 81, 26, 3], 5));

// 47 misol
// function ovoz() {
//   let upvotes = +prompt("qo’llab quvvatlashlar");
//   let downvotes = +prompt(" qo’llamaganlar");
//   console.log(upvotes + downvotes);
// }
// ovoz();

// 49 misol
// function reverseArray(arr) {
//   return arr.reverse();
// }
// console.log(reverseArray([25, 68, 91, 1, 7, 8, -4]));

// 56 misol
// function getLastElement(arr) {
//   return arr[arr.length - 1];
// }
// let myArray = [1, 2, 3, 4, 5];
// console.log(getLastElement(myArray));

// 62 misol
// function convertToString(arr) {
//   return arr.join("");
// }
// const arr = ["a", "b", "c", "d", "e", "f"];
// const result = convertToString(arr);
// console.log(result);

// 63 misol
// function birlash(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// const arr1 = [7, 8];
// const arr2 = [10, 9, 1, 1, 2];
// const result = birlash(arr1, arr2);
// console.log(result);

// 64 misol
// function topIndex(arr, element) {
//   return arr.indexOf(element);
// }
// const arr = ["hello", "world", "phone", "good"];
// const element = "world";
// const result = topIndex(arr, element);
// console.log(result);

// 66 misol
// function sumArray(arr) {
//   let sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function addOneToEach(arr) {
//   return arr.map(function(item) {
//       return item + 1;
//   });
// }

// // Namunani tekshirish
// console.log(addOneToEach([-1, -2, -3, -4])); // [0, -1, -2, -3] ni chiqaradi
