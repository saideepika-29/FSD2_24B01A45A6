import * as fs from "fs"

function bianryToDecimal(num : number):string{
    if(num === 0)
        return "0";
    let binary: string = "";
    while(num > 0){
        let rem: number = num % 2;
        binary = rem + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

const input = fs.readFileSync(0, "utf8").trim();
const num = Number(input);
console.log(bianryToDecimal(num));