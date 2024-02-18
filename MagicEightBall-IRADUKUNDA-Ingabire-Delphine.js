let userName = ""; // Step 1

// Step 2
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = "What will happen tomorrow?"; // Step 3

// Step 4
console.log(`${userName ? userName : "User"} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8); // Step 5

let eightBall = ""; // Step 6

// Step 7 - Control Flow
if (randomNumber === 0) {
  eightBall = "It is certain";
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
  eightBall = "Do not count on it";
} else if (randomNumber === 5) {
  eightBall = "My sources say no";
} else if (randomNumber === 6) {
  eightBall = "Outlook not so good";
} else if (randomNumber === 7) {
  eightBall = "Signs point to yes";
}

// Step 8
console.log(`Magic Eight Ball's answer: ${eightBall}`);
