// ข้อ 13

let maxNumber = -Infinity;
let minNumber = +Infinity;
let sum = 0
    while(true) {
        let inPut = prompt('enter a number')
        if(inPut == "stop"){
            break;
        }
        else if(+inPut < +minNumber){
            minNumber = inPut
        }
        else if(+inPut > +maxNumber){
            maxNumber = inPut
        }
        {sum = maxNumber-minNumber}
}
console.log(sum)