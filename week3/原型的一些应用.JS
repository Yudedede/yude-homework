function GradeManager() {
  this.students = [];
}

GradeManager.prototype.addStudent = function (student) {
  this.students.push(student);
};

GradeManager.prototype.getAll = function () {
  return [...this.students];
};

function createGradeManager() {
  return new GradeManager();
}

const manager = createGradeManager();
manager.addStudent({ name: "张三", math: 100, english: 90 });
console.log(manager.getAll()); // [{ name: "张三", math: 100, english: 90 }]