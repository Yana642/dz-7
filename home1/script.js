// 1
let sum = +prompt('Введіть суму покупки')

if(sum >= 200 && sum <= 300){
    rebate = 0.03;
    let sum2 =  sum - (sum * rebate)  
    console.log(`Сума зі знижкою ${sum2}`)
}
else if(sum >= 300 && sum <= 500){
    rebate = 0.05;
    let sum2 =  sum - (sum * rebate)
    console.log(`Сума зі знижкою ${sum2}`)
}
else if(sum >= 500 && sum <= 700){
    rebate = 0.07;
    let sum2 =  sum - (sum * rebate)
    console.log(`Сума зі знижкою ${sum2}`)
}
else{
    console.log('ERROR 404')
}


// 2
let money = +prompt('Введіть суму грошей у гаманці')
let chocolate = +prompt('Введіть ціну однієї шоколадки')

let result_chocolate = money / chocolate
let result_money = money % chocolate
console.log(`Ви можете купити ${result_chocolate} шоколадок. Решта: ${result_money}`)


// 3
let distance = +prompt('Введіть відстань у км між двома міcтами')
let time = +prompt('Введіть за скільки годин ви хоче доїхати')

let speed = distance / time;
console.log(`Вам необхідно рухатися зі швидкістю ${speed} км/год`)