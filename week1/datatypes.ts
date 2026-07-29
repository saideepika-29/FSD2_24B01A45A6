let productName: string = "Laptop";
let price: number = 55000;
let inStock: boolean = true;
console.log("DataType of productName: " + typeof productName);
console.log("DataType of price: " + typeof price);
console.log("DataType of inStock: " + typeof inStock);
function displayProduct(name: string, cost: number, available: boolean): void {
    console.log(`Product Name: ${name}`);
    console.log(`Price: ₹${cost}`);
    console.log(`Available: ${available}`);
}
displayProduct(productName, price, inStock);