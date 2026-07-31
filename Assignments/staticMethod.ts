class Student {
    static collegeName: string = "ABC College";
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }
    display(): void {
        console.log("Name:", this.name);
    }
}
const s1 = new Student("Alice");
const s2 = new Student("Bob");
s1.display();
s2.display();
Student.displayCollege();