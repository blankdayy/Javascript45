// ข้อ 12
let maxNumber = -Infinity;
let minNumber = +Infinity;
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
}
console.log(inPut)