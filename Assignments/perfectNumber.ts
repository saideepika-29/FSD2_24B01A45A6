import * as fs from "fs"

function isPerfect(num : number): boolean{
    let n : number =  num;
    let s : number = 0;
    for(let i : number = 1;i <= n/2; i++){
        if(n%i == 0)
            s += i;
    }
    if(s == num)
        return true;
    return false;
}

const input = fs.readFileSync(0,'utf-8').trim();
let num: number = Number(input);
console.log(isPerfect(num));

