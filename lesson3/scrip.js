
const btn = document.querySelector('.btn'),
answer = document.querySelector('.answer'),
input1 = document.querySelector('.input1'),
input2 = document.querySelector('.input2');
// console.log(btn,answer,text)
// function calculate() {
//     let num1 = +prompt('Введіть перше число');
//     let num2 = +prompt('Введіть друге число');
//     let number1 = num1
//     let number2 = num2
//     let result = number1 + number2
//     btn.addEventListener('click', function(){
//         text.textContent = `${number1} + ${number2} = ${result}`
//         answer.textContent = `Answer - ${result}`
//     })
// }
// calculate()

function calculate() {
    btn.addEventListener('click', function(){
        let number1 = Number(input1.value) 
        let number2 = Number(input2.value)
        let plus = number1 + number2
        let minus = number1 - number2
        let congr = number1 * number2
        let dil = number1 / number2
        answer.innerHTML = `Додавання: ${plus}<br>Віднімання: ${minus}<br>Множення: ${congr}<br>Ділення: ${dil}<br>`
    })
}
calculate()