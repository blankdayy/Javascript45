// ข้อ 15

let input = prompt('enter number')
let box = ""
let New = ""
if(Number(input)>=0){
    for(let i=0; i < input.length; i++){
        New = input.slice(i,i+1)
        box = New+box
    }
} else{
    for(let i=1; i< input.length; i++){
        New = input.slice(i,i+1)
        box = New+box
    }
    console.log("-"+Number(box))
}