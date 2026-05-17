const express = require("express");

const app = express();

//register view engine
app.set("view engine", "ejs");

//listen for requests

app.listen(3000);

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
