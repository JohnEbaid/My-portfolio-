let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "Failed";
}

alert("The grade is: " + grade);
console.log("Score:", score);
console.log("Grade:", grade);
