import * as fs from "fs"
function isPrime( num : number):boolean{
    if( num <= 1)
        return false;
    if(num == 2)
        return true;
    if(num % 2 ==0)
        return false;
    for(let i = 3; i * i <= num;i+=2){
        if(num % i == 0)
            return false;
    }
        return true;
}
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);
const num1 = Number(input[0]);
const num2 = Number(input[1]);
let arr:Number[] = [];
for(let i = num1; i <= num2; i++){
    if(isPrime(i)){
        arr.push(i);
    }
}
console.log(arr)