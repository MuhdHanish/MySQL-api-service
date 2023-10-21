// import dependencies
import express from "express";
import morgan from "morgan";
import cors from "cors";

// import dotenv
import { config } from "dotenv";
config();


// creat express application
const app = express();

// cors setting
const allowedOrigins = ["http://localhost:5173","http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

// middleware for json
app.use(express.json());
// middleware for handle form data
app.use(express.urlencoded({ extended: true }));
// middleware for log
app.use(morgan("dev"));

// user route
app.use('/');

// database connecting & app listen
const port = process.env.PORT || 8000;

// app listening
 app.listen(port, (): void => console.log(`Server running...`));