import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const n = input[0];
const arr = input.slice(1, n + 1);
let set = new Set<number>();
const duplicates = new Set<number>();
for(let num of arr){
    if(set.has(num)){
        duplicates.add(num);
        }
    else{
        set.add(num);
    }
}
for (const num of duplicates) {
    console.log(num);
}