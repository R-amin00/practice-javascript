const student =  {
    name:'Kalam',
    age:15,
    class: 'Ten',
    marks:{
        math:78,
        physics:89,
        chemistry: 77,
    }
}

const stuName = student.name; // dot (.) notation
const marksPhy = student.marks.physics; // dot (.) notation
const marksMath = student[marks][math];
console.log(marksMath)

console.log(marksPhy)
console.log(stuName);