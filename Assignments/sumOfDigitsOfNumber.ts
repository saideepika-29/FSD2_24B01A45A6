import * as fs from "fs"

function sumOfDigits(num : number):number{
    let sum : number = 0;
    while(num != 0){
        let rem : number = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    return sum;
}
const input = fs.readFileSync(0,'utf-8').trim();
let num: number = Number(input);
console.log(sumOfDigits(num));