let str_numb = 100
let x = 5
let y = 5.0 
let z = Number('5')
let r = Number('test')
let cov_numb = Number(str_numb) // Creates a number from the string

console.table({x, y, z, r, cov_numb})
/*
Numbers:
Add +
Sub - 
Multi *
Div /
Math.floor(<div>) -> chopped off at whole number
Floor Div //
Exp **
MOD % <- Div and give back the remainder
*/

console.log(8 ** 2);
console.log(12 % 5);

console.log(5 / 2);
console.log(Math.floor(5/2));

let total = 0 
let i = 0 
while(i <=100){
    if(i % 2 == 0){
        console.log(i)
        total += i
    }
    i++
}
console.log(total)