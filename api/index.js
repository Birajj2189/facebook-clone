const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config();

// Mongo connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
// Connection events
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + process.env.MONGO_URL);
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

app.listen(process.env.PORT,()=>{
    console.log("Backend is running !!")
})
  
// middleware 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users",userRoute) 
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)

app.get("/", (req,res)=>{
    res.send("welcome to homepage");
});
