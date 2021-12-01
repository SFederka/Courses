//////////////////////////////1
let arr = [1,33,456,986,122]
//найти суму квадратов всех значений масива (reduce)

let sumOfElements = arr.reduce(function(sum, element) {
    return sum + Math.pow(element, 2); 
}, );
   
  console.log(sumOfElements)

//////////////////////////////2
let arr1 = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
//получить массив вида: [ 'My name is Tanita','My name is Vasyl', и тд... ] использовать map
let arr1new = arr1.map(()=>{
  for (let key in arr1){
    return `My name is ${arr1[key]}`
  }
})
// какой вариант правильнее?
let arr1New = arr1.map(()=>{
  for (let name of arr1){
    return `My name is ${name}`
  }
})

console.log(arr1New)

//////////////////////////////3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки
//
// let arr3 =[2, 6, 7, "a", "b", "q"] - expected
let arr3 =["b", 6, "a", "q", 7, 2]
// function sortTheArray(someArray){
//     // ваш код
// }
// sortTheArray(["b", 6, "a", "q", 7, 2])

// let petya = arr3.sort()
// console.log(petya)

function numFilter(value){
  return typeof value === "number"
}
let numArr =  arr3.filter(numFilter)
numArr.sort()
console.log(numArr)
function strFilter(value){
  return typeof value === "string"
}
let strArr =  arr3.filter(strFilter)
strArr.sort()
console.log(strArr)

arr3 = numArr.concat(strArr)
console.log(arr3)

