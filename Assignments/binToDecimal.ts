import * as fs from "fs";

function binaryToDecimal(num: string): number{
    let decimal = 0;
    let pow = 1;
    for(let i = binary.length - 1; i >= 0; i--){
        let dig = Number(binary[i]);
        decimal += dig * pow;
        pow *= 2;
    }
    return decimal;
}

const binary = fs.readFileSync(0, "utf8").trim();
console.log(binaryToDecimal(binary));