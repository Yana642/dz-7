// Напишите программу, которая выводит все элементы массива:
// Создайте массив с несколькими элементами.
// Выведите каждый элемент массива на отдельной строке.

let array = [5,3,8,1,10,1000,0,5000,];
console.log(array)
for(let i=0; i<array.length; i++){
            console.log(array[i]);
}


// Напишите программу, которая находит сумму элементов массива:
// Создайте массив с числами.
// Просуммируйте все числа в массиве и выведите результат.

let numbers = [5,3,8,10,];
console.log(numbers);
let sum=0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i]
}
console.log("Сумма элементов массива: " + sum);