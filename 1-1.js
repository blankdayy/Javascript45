// ข้อ1
function test1(a,b) {
    let a = prompt("enter number A")
    let b = prompt("enter number B")
    let n = 2;
    let sum;
    while (n <= a && n <= b) {
        while (a % n == 0 && b % n == 0) {
            a = a / n
            b = b / n        
        }
        n++   
    }
    sum = a + "/" + b
    return sum
}