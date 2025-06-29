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
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <form method="POST" action="/">
          <label>Enter a string:</label><br><br>
          <input type="text" name="input" required>
          <button type="submit">Count Vowels</button>
        </form>
      </body>
    </html>
  `);
});
app.post('/', (req, res) => {
  const input = req.body.input.toLowerCase();
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let char of input) {
    if (vowels.hasOwnProperty(char)) {
      vowels[char]++;
    }
  }
  res.send(`
    <html>
      <body>
        <p>a, e, i, o, u appear: ${vowels.a}, ${vowels.e}, ${vowels.i}, ${vowels.o}, ${vowels.u} times</p>
      </body>
    </html>
  `);
});
app.listen(3000);
console.log("listening on port 3000")
//run npm start
