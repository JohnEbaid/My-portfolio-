// let score = 85;
// let grade;

// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// } else if (score >= 70) {
//   grade = "C";
// } else {
//   grade = "Failed";
// }

// alert("The grade is: " + grade);
// console.log("Score:", score);
// console.log("Grade:", grade);
 
console.log("Hello World!");

let myString ="ABc123";
console.log(myString);
console.log(typeof myString);

let myNumVar= 123;
console.log(myNumVar);
console.log(typeof myNumVar);

console.log(10+ " eggs");
console.log(10 + 5 +" eggs");
console.log("eggs " + 10 + 5);

function introduction(name, age){
    console.log("Hello my name is " + name + ". I am " + "years old.");
}
introduction("bob", 71)


function school(a,b,c){
    console.log("Hello my name is " + a + " I go to " + b + " and I am a " + c + " major");
}
school ("John", "NYIT", "computer science");

var techClass = ["Sebastian", "Agona", "Karan", "John"];
console.log(techClass[2]);


var sports = ["Basketball","Soccer","Football","Baseball","Hockey","Tennis","Cricket","Pickleball","Ping Pong", "Bowling"];
console.log(sports[4]);
console.log(sports[0].length);
console.log(sports[8].toUpperCase());

let animals = ['lion','elaphant','tiger','giraffe','zebra','monkey','bison','bear'];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    if (i % 2 === 0) {
        console.log(animals[i]);
    }
}

let Sports = ["soccer", "basketball", "tennis", "baseball", "boxing", "swimming"];

for (let i = 0; i < Sports.length; i++) {
    console.log(Sports[i].toUpperCase());
}


for (let i = 0; i < Sports.length; i++) {
    if (Sports[i].length > 6) {
        console.log(Sports[i].toUpperCase());
    }
}



