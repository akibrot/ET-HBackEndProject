import nodemailer from 'nodemailer'


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akibrotsamuelas@gmail.com',
    pass: '0932706240'
  }
});

var mailOptions = {
  from: 'akibrotsamuelas@gmail.com',
  to: 'ssaakilal@gmail.com',
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