import * as fs from "fs";
const str = fs.readFileSync(0, "utf8").trim();
const freq  = new Map<string,number>();
for(const ch of str){
    if(freq.has(ch)){
        freq.set(ch,freq.get(ch)! +1);
    }
    else{
        freq.set(ch,1);
    }
}
for(const[ch,count] of freq){
    console.log(`${ch} ${count}`);
}