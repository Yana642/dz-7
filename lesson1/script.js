// let num = '10'; //str
// let num2 = 10; //number
// let bul = true //буліан
// let obj = [1,2,3] //масив
           
// // typeof - який тип данних
// console.log(typeof num);
// console.log(typeof num2);
// console.log(typeof bul);
// console.log(typeof obj);

// let sum = num + num2 //конкатинація
// console.log(sum)
// num = 12
// console.log(num)

// // + це додавання
// // - віднімання
// // * множення
// // / ділення
// // % це залишок при ділені

// let num3 = 45
// num = 10

// let sum1 = num + num3
// console.log('додавання чисел ' + sum1) // конкатинація
// console.log(`додавання чисел ${sum1}`)// інтерполяція

// const name1 = 'Anna'
// const name2 = 'Mark'
// console.log('Wellcome '+name1+' Hello')
// console.log(`Wellome ${name1} Hello`)

// alert(`Wellome ${name1} Hello`) //модальне вікно

// let name = prompt('Ваше імя'); //модальне вікно

// if(name == 'Artem'){
//     console.log(`Welcome ${name}`)
// }else{
//     console.log('GoodBye')
// }
// ================================

// let number1 = +prompt('enter first number') // + преобразує дані у числовий формат
// let number2 = +prompt('enter second number')
// let sum = number1 + number2
// alert(`${number1} + ${number2} = ${sum}`)

// && - и
// || - або
let month = +prompt('Введіть місяць (число) року')

if(month == 12 || month == 1 || month == 2){
    console.log('Зима!')
}
else if(month>=3 && month<=5){
    console.log('Весна!')
}
else if(month>=6 && month<=8){
    console.log('Літо!')
}
else if(month>=9 && month<=11){
    console.log('Осінь!')
}
else{
    console.log('ERROR 404')
}