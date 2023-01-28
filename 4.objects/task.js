function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student('Alex', 'Male', 33);
let student2 = new Student('Helga', 'Female', 39);
let student3 = new Student('Lev', 'Male', 23);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if ('marks' in this === true ) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {    
    if ('marks' in this === false || this.marks.length === 0) {
        return 0;
    }
    return this.marks.reduce((acc, item) => acc + item/this.marks.length, 0);
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;  
}
