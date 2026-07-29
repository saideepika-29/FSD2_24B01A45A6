function displayCourse(courseName: string): string {
    return `Course: ${courseName}`;
}

function semesterDetails(semester: number = 1): string {
    return `Current Semester: ${semester}`;
}

function registerStudent(studentId: number, email?: string): void {
    console.log(`Student ID: ${studentId}`);

    if (email) {
        console.log(`Email: ${email}`);
    }
}

function calculateAverage(...marks: number[]): number {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

console.log(displayCourse("TypeScript"));
console.log(semesterDetails());
console.log(semesterDetails(3));

registerStudent(101);
registerStudent(102, "deepika@example.com");

const average = calculateAverage(85, 90, 88, 92, 95);
console.log(`Average Marks: ${average}`);