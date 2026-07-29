import * as fs from "fs";
const str = fs.readFileSync(0, "utf8").trim();
const set = new Set<string>();
let ans = "";
for(const ch of str){
    if(!set.has(ch)){
        set.add(ch);
        ans += ch;
    }
}
console.log(ans);