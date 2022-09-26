import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { router } from "./routes/blogRoutes.js";
// The next two lines solves the problem of the __dirname in modumes ES6
import { fileURLToPath } from "url";
import { dirname } from "path";
import { render } from "ejs";

//make dirname and filename
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// express app
const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://saceale:alejo13579@cluster0.lqzk2vz.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    // listen for requests once db is connected
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", router); // we use th imported module from the other file and set the main directon to /blogs

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
