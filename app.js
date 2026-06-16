const express = require("express");
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()



const app = express();

//connect to db

const dbURI =  process.env.DB_URI
console.log(dbURI)

mongoose.connect(dbURI)
.then((result) => console.log('connected to mongodb'))
.catch((err) => console.log(err))




//register view engine
app.set("view engine", "ejs");

//listen for requests

app.listen(3000);

// app.use((req,res) => {

// })


//middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'));

app.get("/", (req, res) => {

    const blogs = [
  {
    title: "Yoshi finds eggs",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Mario finds stars",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "How to defeat bowser",
    snippet: "Lorem ipsum dolor sit amet consectetur",
  },
];
  // res.send('<p>Home page</p>')
  // res.sendFile('./views/index.html', {root: __dirname})
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  // res.send('<p>About page</p>')
  // res.sendFile('./views/about.html', {root: __dirname})
  res.render("about", { title: "About" });
});

//redirect
// app.get('/about-us', (req,res) =>{
//     res.redirect('/about');
// })

app.get("/create", (req, res) => {
  res.render("create", { title: "Create a blog" });
});

//404 page

app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', {root: __dirname})
  res.status(404).render("404", { title: "404" });
});
