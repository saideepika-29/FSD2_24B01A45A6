class Department{
    public static readonly deptName: string = "Artifficial Intelligence";
    public static branch:number = 2;
    public static  deptCode : number;
    public static deptHead : string;
    
    constructor(name: string,noOfBranches: number){
        Department.deptHead = name;
        Department.deptCode = noOfBranches;
        Department.branch++;
    }
    public static getDeptInfo(): void{
        console.log(`Welcome to department of ${Department.deptName}`);
    }
    public showDetails(): void{
        console.log(`Head of Department: ${Department.deptHead}`);
        console.log(`Department Code : ${Department.deptCode}`);
    }
}

console.log(Department.deptName);
Department.getDeptInfo();

const obj1 = new Department("AI&DS",2);
const obj2 = new Department("AI&ML",2);

console.log(Department.deptName);
obj1.showDetails();
obj2.showDetails();