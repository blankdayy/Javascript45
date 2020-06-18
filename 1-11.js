// ข้อ11
let num1 = Infinity;
let num2 = Infinity;
let num3 = Infinity;
while (true) {
    let minNum = prompt('enter a number')
    if (minNum == "stop") {
        break;
    }
    else if (+minNum < num1 && +minNum < num2 && +minNum < num3 ) {
        num1 = num2
        num2 = num3
        num3 = minNum 
    } else if ( +minNum > num3 && +minNum < num2) {
        num1 = num2
        num2 = minNum
    } else if (+minNum > num2 && +minNum < num1) {
        num1=minNum
    }
    console.log(`${num1}+${num2}+${num3}`)
}
console.log(`${num1}+${num2}+${num3}`)