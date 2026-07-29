function calculateInterest(amount:number,time:number,interest:number): string{
    return `Interest: ${(amount * time * interest)/100}`
}

const interest = (amount:number,time:number,interest:number): string => {
    return `Interest: ${(amount * time * interest)/100}`
}

const greet = (name: string): string => `Hello ${name}`

let amount: number = 12000
let time: number = 1
let SI: number = 2
console.log(calculateInterest(amount,time,SI));

console.log(interest(amount,time,SI))
