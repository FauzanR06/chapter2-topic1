const studentNames = ["Ucup", "Asep", "Aceng"];

studentNames.push("Feb");
studentNames.push("Fauzan");

console.log(studentNames[0]);

studentNames.map((student, index) => {
  console.log(`The student in table ${index} is ${student}`);
});

console.log(studentNames);
