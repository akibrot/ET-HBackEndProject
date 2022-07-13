import nodemailer from 'nodemailer'


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akibrotsamuelas@gmail.com',
    pass: 'kbjcmbhlvvyglcfu'
  }
  
});

var mailOptions = {
  from: 'xxxx',
  to: 'one30836@gmail.com',
  subject: 'Sending Email using Node.js',
  html: `<div><h1>Password recoverd seccessfully </h1> <h1>thank you  </h1> <p>your password</p><u>${1234567890}</u></div>`
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});