// ข้อ4
let x = 0
let y = 1
let n = Number(prompt())
let newY;
for (i = 2; i < n; i++) {
    newY = x + y
    x = y 
    y = newY
}
    console.log(y)