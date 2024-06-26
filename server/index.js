const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect(
  "mongodb+srv://punitgoyal106:39S3oErcDTeBnay2@cluster0.uccmpuk.mongodb.net/",
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
// const jobsRouter = require('./routes/jobs'); // Import routes for "jobs" resource
// app.use('/api/jobs', jobsRouter);

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Welcome to the Job Portal API");
});

const salt = bcrypt.genSaltSync(10);
const secret = "fajhjjjsfahuikjakh";

app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log(req.body)
  try {

    const userDoc = await User.create({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

app.post("/login", async (req, res) => {
  const { firstname, email, password } = req.body;
  const userDoc = await User.findOne({ email });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ firstname, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        firstname,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

// Define a fallback error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
