let data: any = 100;
data = "TypeScript";
data = true;
let userInput: unknown = 250;
if (typeof userInput === "number") {
    console.log(`Square of userInput: ${userInput * userInput}`);
} else {
    console.log("userInput is not a number");
}
function showMessage(text: string): void {
    console.log(`Message: ${text}`);
}
showMessage("Welcome to TypeScript");