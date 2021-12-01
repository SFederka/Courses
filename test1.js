    'use strict'

const MAX_PLACES = 50
let firstPlace,
    secondPlace

// максимальное к-во мест в зале 50, если места выходят за рамки интервала / вывести алерт с предупреждением
// каждое 3е место недоступно из-за ковида =( , если место зарезервировано(тоесть каждое третее) выводим алерт с текстом 'место забронированно'
// ввести номер места (через prompt) и записать в переменные firstPlace(введенное место) и в secondPlace СЛЕДУЮЩЕЕ ближайшее местов интервале от 20 до 30
// решить задание 2-мя способами: if, switch...case


firstPlace = +prompt('input place')

if (firstPlace>=51){
    alert(`max number = ${MAX_PLACES}`)
} else if (firstPlace%3===0){
    alert("the place is unavailable")
} else if(firstPlace>=20&&firstPlace<=30)
{ 
    if ((firstPlace-1)%3===0){
        secondPlace = firstPlace+1
        alert(`nearest available place ${secondPlace}`)
    }else if (firstPlace===20){
        secondPlace = firstPlace+2
        alert(`nearest available place ${secondPlace}`)}
    else if((firstPlace+1)%3===0){
            secondPlace = firstPlace-1
            alert(`nearest available place ${secondPlace}`)}
}   


// switch(true){
//     case firstPlace>=51:
//         alert(`max number = ${MAX_PLACES}`)
//         break
//     case firstPlace%3===0:
//         alert("the place is unavailable")
//         break
//     case firstPlace===20:
//         secondPlace = firstPlace+2
//         alert(`nearest available place ${secondPlace}`)
//         break
//     case firstPlace>=22&&firstPlace<=29:
//         switch(true){
//             case (firstPlace-1)%3===0:
//                 secondPlace = firstPlace+1
//                 alert(`nearest available place ${secondPlace}`)
//                 break
//             case (firstPlace+1)%3===0:
//                 secondPlace = firstPlace-1
//                 alert(`nearest available place ${secondPlace}`)
//                 break
//         }break
//         default:
//             alert('the place is available')

}
// hразбор дз на занятии
if(firstPlace>=20&&firstPlace<29&&firstPlace%3!==0){
    if secondPlace =!(firstPlace+1)%3?firstPlace+1:firstPlace+2
}