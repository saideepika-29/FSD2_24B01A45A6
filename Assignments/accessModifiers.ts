class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
class Manager extends Employee {
    constructor(name: string, salary: number, department: string) {
        super(name, salary, department);
    }
    showDepartment(): void {
        console.log("Department:", this.department);
    }
}
const emp = new Employee("Alice", 50000, "HR");
console.log(emp.name);
emp.display();
const mgr = new Manager("Bob", 80000, "IT");
console.log(mgr.name);
mgr.showDepartment();