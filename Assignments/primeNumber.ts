import * as fs from "fs"
function isPrime( num : number):boolean{
    if( num <= 1)
        return false;
    if(num == 2)
        return true;
    if(num % 2 ==0)
        return false;
    for(let i = 3; i * i <= num;i++){
        if(num % i == 0)
            return false;
    }
        return true;
}
const input = fs.readFileSync(0,"utf8").trim();
const num = Number(input);
console.log(isPrime(num))