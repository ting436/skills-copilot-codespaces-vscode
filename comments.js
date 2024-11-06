// Create web server
// Create a route for comments
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('Comments route');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});