// This will  be a constant variable
const kelvin = 293;

// Celsiue is different from Kelvin
const celsius = kelvin - 273;

// an equation to calculat fahrenheit
let fahrenheit = celsius * (9/5) + 32

// This will round up the result to an integer instead of a decimal
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// this equation will help converting from celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);
