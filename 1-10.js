
// ข้อ 10
let a = prompt('enter a number')
while(true) {
    let b = prompt('enter a number')
    if(b == "stop"|| a == "stop"){
        break;
    }
    else if(a > b){
        a = b}
}
console.log(a)
