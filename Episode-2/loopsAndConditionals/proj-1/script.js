let marks = [78, 85, 90, 66, 45];

let total = 0;
let isFail = false;

for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 0 || marks[i] > 100) {
    console.log("Invalid Marks");
    break;
  }

  if (marks[i] < 40) {
    isFail = true;
  }

  total += marks[i];
}

let average = total / marks.length;

let grade;
if (average >= 90) grade = "A+";
else if (average >= 75) grade = "A";
else if (average >= 60) grade = "B";
else if (average >= 40) grade = "C";
else grade = "F";

console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Result:", isFail ? "Fail" : "Pass");
console.log("Grade:", grade);
