const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3333;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.use(express.static("public"));




app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout');
// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});