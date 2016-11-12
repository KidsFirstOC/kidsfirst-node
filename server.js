const express = require("express");
const bodyParser = require("body-parser");
const knex = require("knex");
const staticAssets = __dirname + "/public";

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    database: "kidsfirst",
    password: "1234",
  }
})

var app = express();

app
  .set("views", __dirname + "/views")
  .set("view engine", "hjs")
  .use(bodyParser.json())
  .use(express.static(staticAssets))
  .get("/",(req,res) => {
    res.render("index",{
      partials: {head: "head", header: "header", footer: "footer"}
    })
  })
  .get("/contact",(req,res) => {
    res.render("contact",{
      partials: {head: "head", header: "header", footer: "footer"}
    })
  })
  .get("/donate",(req,res) => {
    res.render("donate",{
      partials: {head: "head", header: "header", footer: "footer"}
    })
  })
  .get("/faq",(req,res) => {
    res.render("faq",{
      partials: {head: "head", header: "header", footer: "footer"}
    })
  })
  .get("/learn",(req,res) => {
    res.render("learn",{
      partials: {head: "head", header: "header", footer: "footer"}
    })
  })
  .get("/register",(req,res) => {
    res.render("register",{
      partials: {head: "head", header: "header", footer: "footer"}
    })
  })
  .get("/test",(req,res) => {
    res.render("test",{
      partials: {head: "head", header: "header", footer: "footer"}
    })
  })
  .get("/volunteer",(req,res) => {
    res.render("volunteer",{
      partials: {head: "head", header: "header", footer: "footer"}
    })
  })
  .get("/participant",(req,res, next) => {
    console.log("refreshed");
    db("participant").then((participant) => {
      res.render("participant", {
        participant,
        partials: {head: "head", header: "header", footer: "footer"}
      })
    }, next)
  })
  .get("/participant/:user_ID",(req,res, next) => {
    const user_ID = req.params.user_ID;
    db("participant")
    .where("id",user_ID)
    .then((participant) => {
      res.render("userinfo", {
        participant,
        partials: {head: "head", header: "header", footer: "footer"}
      })
    }, next)
  })
  .use(function(req, res, next){
    res.status(404)
    .render('error', {
      title: "Sorry, page not found",
      partials: {head: "head", header: "header", footer: "footer"}
    })
  })
  .listen(3000);
