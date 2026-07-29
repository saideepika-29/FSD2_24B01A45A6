import * as fs from "fs"

function factorial(num : number):number{
    let f:number = 1;
    for(let i : number = 1; i <= num; i++){
        f *= i;
    }
    return f;
}

function isStrong(num : number): boolean{
    let s: number = 0;
    let n: number = num;
    while(n != 0){
        let temp: number = n%10;
        s+=factorial(temp);
        n = Math.floor(n/10);
    }
    if(s == num)
        return true;
    return false;
}

const input = fs.readFileSync(0,'utf-8').trim();
let num: number = Number(input);
console.log(isStrong(num));