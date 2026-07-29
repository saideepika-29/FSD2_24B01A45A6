import * as fs from "fs";
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const n = input[0];
const arr = input.slice(1, n + 1);
const freq = new Map<number, number>();
for (const num of arr) {
    if (freq.has(num)) {
        freq.set(num, freq.get(num)! + 1);
    } else {
        freq.set(num, 1);
    }
}
for (const [num, count] of freq) {
    console.log(`${num} ${count}`);
}