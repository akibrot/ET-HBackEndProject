import { SMTPClient } from "emailjs";

const client = new SMTPClient({
  user: "akibrotsamuelas@gmail.com",
  password: "kbjcmbhlvvyglcfu",
  host: "smtp.gmail.com",
  ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent
client.send(
  {
   
    from: "Ethiopian Heritages",
    to: "one30836@gmail.com",
    cc: "",
    subject: "Greetings",
    text:"one30836@gmail.comone30836@gmail.comone30836@gmail.comone30836@gmail.com"
  },
  (err, message) => {
    console.log(err || "message sented");
  }
);
