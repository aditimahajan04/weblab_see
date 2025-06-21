// Use offline Express from local node_modules
const express = require('express');

const app = express();
let visitCount = 0;

// Custom Middleware 1: Logs method and URL
function logger(req, res, next) {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
}

// Custom Middleware 2: Count visits
function visitCounter(req, res, next) {
  visitCount++;
  next();
}

app.use(logger);
app.use(visitCounter);

// Route
app.get('/', (req, res) => {
  res.send(`This site has been visited ${visitCount} times.`);
});

// Start server
app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});


//make 10a.js file put the code 
//run node 10a.js
