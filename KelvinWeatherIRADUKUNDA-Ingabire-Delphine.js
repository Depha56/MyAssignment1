// make a declaration of variale Kelvin to constant
const kelvin = 293;
//make a declaration of variale celsius and assign to kelvin- 273
const celsius = kelvin - 273;
// calculation of farnheit
let fahrenheit = celsius * (9 / 5) + 32;
//round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
