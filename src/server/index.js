//import "babel-polyfill";
//import express from "express";
const express = require("express");
//import bodyParser from "body-parser";
const bodyParser = require("body-parser");
//import mailer from "./mailer";
const mailer = require("./mailer");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.');
  console.log(`Server is working`);
});

app.post("*", (req, res) => {
  console.log(`Got to post function in express server`);
  const { email = "", name = "", message = "" } = req.body;
  mailer({ email, name, text: message })
    .then(() => {
      console.log(`Sent the message "${message}" from <${name}> ${email}.`);
      res.redirect("/#success");
    })
    .catch(error => {
      console.log(
        `Failed to send the message "${message}" from <${name}> ${email} with the error ${error &&
          error.message}`
      );
      res.redirect("/#error");
    });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
