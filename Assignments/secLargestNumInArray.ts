import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const n = input[0];
const arr = input.slice(1);
let l1 = arr[0];
let l2 = arr[1];
if(l1 < l2){
    let temp = l1;
    l1 = l2;
    l2 = temp;
}
for(let num of arr){
    if(num > l1){
        l2 = l1;
        l1 = num;
    }
    else if(num > l2 && num != l1)
        l2 = num;
}
console.log(l2);