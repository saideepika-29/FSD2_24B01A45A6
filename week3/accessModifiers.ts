class Student{
    public studentId:string;
    protected name:string;
    private grade:string;
    constructor(studentId:string,name:string,grade:string){
        this.studentId = studentId;
        this.name = name;
        this.grade = grade;
    }

    public displayDetails():void{
        console.log("--------------------------");
        console.log(`redg no: ${this.studentId}`);
        console.log(`name : ${this.name}`);
        console.log(`grade : ${this.grade}`);
        console.log("--------------------------");
    }
}

class CollegeStudent extends Student {
    constructor(studentId: string, name: string, grade: string) {
        super(studentId, name, grade);
    }
    public showProtected(): void {     //protected can be accessed in child class 
        console.log(`Protected Name: ${this.name}`);  
        console.log("--------------------------")
    }
    public showPrivate(): void {       //private class cannot be accessed in child class
        //console.log(this.grade); 
    }
}

const s1 = new Student("24B01A45A6","Deepika","S");
s1.displayDetails();

const s2 = new CollegeStudent("24B01A45A6","Deepika","S");
s2.showProtected();
export{}