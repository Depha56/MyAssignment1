let raceNumber = Math.floor(Math.random() * 1000); // Step 1

const registeredEarly = false; // Step 2
const age = 16; // Step 3

// Step 4
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Step 5
if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
}

// Step 6
else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
}

// Step 7
else if (age < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
}

// Step 9
else {
  console.log("Please see the registration desk.");
}
