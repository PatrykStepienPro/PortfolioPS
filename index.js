const express = require("express");
const dotnev = require("dotenv");
const mg = require("mailgun-js");
const { PureComponent } = require("react");
("use strict");
const nodemailer = require("nodemailer");



const app = express();

dotnev.config();
const path = require("path");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());

app.get('/test', (req, res) => {
    res.send('Hello World!')
  })

app.post("/api/emial", (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: `hotmail`,
      auth: {
        user: process.env.MAILER_USER, // generated ethereal user
        pass: process.env.MAILER_PASSWORD, // generated ethereal password
      },
    });

    const { name, email, subject, message } = req.body;
    let info = transporter.sendMail({
      from: process.env.MAILER_USER,
      to: "patrykl655@wp.pl", // list of receivers
      subject: `${subject}`, // Subject line
      text: `${message}`, // plain text body
      html: `<p>${message} <br> My name and emails:<br> ${name} <br> ${email}</p>`, // html body
    });
  } catch (error) {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Error in sending email" });
    }
  }
  console.log(`${name} ${email} ${subject} ${message}`);
  res.send({ message: "Email sent successfully" });
});

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
