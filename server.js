const express = require("express");
const dotnev = require("dotenv");
const mg = require("mailgun-js");
const { PureComponent } = require("react");
("use strict");
const nodemailer = require("nodemailer");
const path = require("path");

dotnev.config();

//let testAccount = await nodemailer.createTestAccount();
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  service: "outlook", // service name
  secureConnection: false,
  tls: {
    ciphers: "SSLv3", // tls version
  },
  port: 587,
  auth: {
    user: process.env.MAILER_USER, // generated ethereal user
    pass: process.env.MAILER_PASSWORD, // generated ethereal password
  },
});

const app = express();
app.get('/test', (req, res) => {
    res.send('Hello World!')
  })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/emial", (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    let info = transporter.sendMail({
      from: '"Portfolio" <portfolioSenderPS@outlook.com>',
      to: "patrykl655@wp.pl", // list of receivers
      subject: `${subject}`, // Subject line
      text: `${message}`, // plain text body
      html: `<p>${message} <br> My name and emails:<br> ${name} <br> ${email}</p>`, // html body
    });
  } catch (error) {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Error in sending email" });
      return;
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
