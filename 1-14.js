// ข้อ 14
let Count = 0;
let Average = 0;
while (true) {
    let ANumber = prompt('put a number')
    if (Number(ANumber)) { Average += Number(ANumber) 
    Count++
}else if(ANumber == "stop"){
    console.log(Average/Count)
    break;
}
}