import * as fs from "fs"
function gcd(num1:number,num2:number):number{
    while(num2 != 0){
        let temp : number = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
function lcm(num1:number,num2:number):number{
    return ((num1*num2)/gcd(num1,num2));
}
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);
const num1 = Number(input[0]);
const num2 = Number(input[1]);
console.log(gcd(num1,num2));
console.log(lcm(num1,num2));
