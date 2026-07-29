import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const n = input[0];
const arr = input.slice(1, n + 1);
let k = input[n + 1];
k %= n;
const res = [...arr.slice(k),...arr.slice(0,k)];
console.log(res.join(" "));