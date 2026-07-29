import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const n = input[0];
const arr = input.slice(1);
let actualSum = 0;
for(const num of arr)
    actualSum+=num;
let totalSum = (n*(n+1))/2;
console.log(totalSum - actualSum)