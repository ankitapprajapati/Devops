const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send("I am okay");
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App is listening at port ${port}`);
});

