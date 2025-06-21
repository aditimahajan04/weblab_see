//package.json
{
  "name": "vowelcount",
  "version": "1.0.0",
  "main": "8a.js",
  "scripts": {
    "start": "node 8a.js"
  }
}

//8a.js
const readline = require("readline");

function vowelCount(str) {
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let char of str.toLowerCase()) {
    if (vowels.hasOwnProperty(char)) {
      vowels[char]++;
    }
  }
  console.log(`\na, e, i, o, u appear: ${vowels.a}, ${vowels.e}, ${vowels.i}, ${vowels.o}, ${vowels.u} times`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(answer) {
  vowelCount(answer);
  rl.close();
});

