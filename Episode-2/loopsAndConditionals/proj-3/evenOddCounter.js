let numbers = [10, 15, 22, 33, 40];
let even = 0, odd = 0;

for (let num of numbers) {
  if (num % 2 === 0) even++;
  else odd++;
}

console.log("Even:", even);
console.log("Odd:", odd);
