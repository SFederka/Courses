//  Массивы и функции:
//  Задание 1
// Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill(value, length) { 
	let arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

console.log(arrayFill('x', 5));

// Задание 2
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let arr2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
	for (let j = 0; j < arr2[i].length; j++) {
  		for (let k = 0; k < arr2[i][j].length; k++) {
			sum += arr2[i][j][k];
   		}
	}
}
console.log(sum);


// Задание 3
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange (a){
switch (true){
	case a > 0 && a < 10:
		return true
default:
	return false
}}
console.log(isNumberInRange(1))
// Задание 4
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
function isEven (a){
	switch (true){
		case a%2===0:
			return true
	default:
		return false
	}}
console.log(isEven(3))

// Задание 5
// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
let arr3_1 = [1,2,3,4,5,6,7,8,9];
let arr3_2 = []
for (let i = 0; i<= arr3_1.length; i++){
	if (isEven(arr3_1[i])){
		arr3_2.push(arr3_1[i]);
	}
}
console.log(arr3_2)



// Задание 6

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
function getDivisors(num) {
  let arr4 = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      arr4.push(i);
    }
  }
  return arr4;}
console.log(getDivisors(14));
// Задание 7
// Создайте функцию, которая получает два параметра – число и степень числа. Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.
// Задание 8
// Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
// Задание 9
// Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
// Задание 10
// Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.

// if данные !=  то ошибка
// for in 



// Задание 11
// Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.
// Задание 12
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// Задание 13
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
// Задание 14
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Показать решение.
// Задание 15
// Дана строка, например, '123456'. Сделайте из нее '214365'.