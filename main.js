const createStudent = (name, grade) => {
    studentObject = {}
    studentObject.name = name;
    studentObject.grade = grade;
    return studentObject;
}

const addMathGrade = (studentObject) => {
    studentObject.math = "B";
    return studentObject;
}

const addHistoryGrade = (studentObject) => {
    studentObject.history = "C";
    return studentObject;
}

const addScienceGrade = (studentObject) => {
    studentObject.science = "A";
    return studentObject;
}

let student1 = createStudent("Nathan Traczewski", "12th grade");
addMathGrade(student1);
addHistoryGrade(student1);
addScienceGrade(student1);

console.log(student1);