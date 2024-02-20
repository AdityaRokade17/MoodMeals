const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors({
    origin: "*",
    credentials: true,
  }));

require('dotenv').config();
const PORT = process.env.PORT;

const cookieParser = require("cookie-parser");
app.use(cookieParser())

app.use(express.json())

const {dbConnect} = require("./config/db");
dbConnect();



const user = require("./routes/userRoute");
app.use("/api/v1" , user);

const eatsgpt = require("./routes/eatsGPTRoute");
app.use("/api/v1" , eatsgpt);

const moodmeal = require("./routes/moodMealsRoute");
app.use("/api/v1/moodmeals" , moodmeal );

app.get("/", (req, res) => {
  res.send("Welcome to the root path!");
});
app.listen(PORT , () => {
    console.log(`server is running on ${PORT}`);

});


