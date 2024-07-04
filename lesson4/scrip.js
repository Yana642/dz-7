// for(let i = 1; i<=10; i++){
//     console.log(i)
// }

// for(let i=1; i<=10; i++){
//     console.log(i*i)
// }

// for(let i=7; i<=10; i++){
//     console.log(`Табличка множення на ${i}`);
//     for(let j=1; j<=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// function Prime(number1, number2){
//     let result = number1 + number2
//     console.log(result)
// }
// Prime(5, 10)

// function Prime(number){
//     // якщо число менше або дорівнює 1, воно не просте
//     if(number<=1){
//         return false
//     }
//     for(let i=2; i<number; i++){
//         if(number % i === 0){
//             return false   //якщо число не просте
//         }
//     }
//     return true
// }
// let numberCheck = 17
// if(Prime(numberCheck)){
//     console.log(numberCheck + ' Є простим числом')
// }else{
//     console.log(numberCheck + ' не просте')
// }

// function Prime(start, end){
//     console.log(start, end)
//     if(start > end){
//         console.log('некоректно заданий діапазон')
//         return
//     }
    
//     for(let i = start; i<=end; i++){
//         if(Prime(i)){
//             console.log(i)
//         }
//     }
// }
// Prime(1, 50)

const plate = document.querySelector('.plate');

plate.addEventListener('click', function(){
for(let i=7; i<=10; i++){
    plate.innerHTML +=`Табличка множення на ${i} <br>`;
    for(let j=1; j<=10; j++){
        plate.innerHTML +=`${i} * ${j} = ${i*j} <br>`;
    }   
}
})