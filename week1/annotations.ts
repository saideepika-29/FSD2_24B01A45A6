let employee: string = "Ravi";
let experience: number = 5;
let isPermanent: boolean = true;

function getEmployee(name: string, years: number, permanent: boolean): string {
    return `Employee: ${name}, Experience: ${years} years, Permanent: ${permanent}`;
}

let departments: string[] = ["HR", "Finance", "IT"];

const details = getEmployee(employee, experience, isPermanent);

console.log(details);
console.log(`Departments: ${departments.join(", ")}`);