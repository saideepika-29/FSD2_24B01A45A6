import * as fs from "fs"
function isArmstrong(num: number): boolean{
    let n: number =  num;
    let s : number = 0;
    while(n != 0){
        let rem : number = n%10;
        s += (rem*rem*rem);
        n = Math.floor(n/10);
    }
    if(num == s)
        return true;
    return false;
}
const input = fs.readFileSync(0,'utf-8').trim();
let num: number = Number(input);
console.log(isArmstrong(num));

