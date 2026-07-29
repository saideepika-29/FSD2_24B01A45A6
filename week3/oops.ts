class Student{
    public studentId: number;
    public studentName: string;
    public dept?: string;
    public grade?:string;

    /*constructor(studentId:number,studentName:string){
        this.studentId = studentId;
        this.studentName = studentName;
    }
    constructor(studentId:number,studentName:string,dept:string,grade: string){
        this.studentId = studentId;
        this.studentName = studentName;
        this.dept = dept;
        this.grade = grade;   
    }*/
    constructor(studentId:number,studentName:string,dept:string,grade?:string){
        this.studentId = studentId;
        this.studentName = studentName;
        this.dept = dept;
        this.grade = grade;
    }

    public displayDetails():void{
    console.log("--------------------");
    console.log("Students Details");
    console.log(`redg no: ${this.studentId}`);
    console.log(`name: ${this.studentName}`);
    console.log(`department: ${this.dept}`);
    console.log(`grade: ${this.grade}`);
    console.log("--------------------");
}
}


//const s1 = new Student(2401456,"Deepika");
//const s2 = new Student(2401456,"Deepika","AI","S");
//s1.displayDetails();
//s2.displayDetails();
const s3 = new Student(2401456,"Deepika","AI");
s3.displayDetails()
export{}