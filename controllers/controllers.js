import RecommendationsModel from "../model/MakeRecommendationModel.js";
import NewUserModel from "../model/CustomerUserModel.js";
import nodemailer from "nodemailer";
import FeedbackModel from "../model/Feedback.js";
import CustomerUserModel from "../model/CustomerUserModel.js";
import AgentuserModel from "../model/AgentUserModel.js";
import AdminUserModel from "../model/AdminUserModel.js";
import HeritagesModel from "../model/HeritageModel.js";
export const welcome = (req, res) => {
  res.send("server started sucesfully");
};
const name = {
  FirstName: "aki",
  LastName: "sami",
  Address: "dilla",
  Email: "aki@gg.com",
  Password: "123",
};
//Manage Normal User
export const CreateUser = async (req, res) => {
  // console.log(req.body.Email);
  const check = await CustomerUserModel.findOne({ Email: req.body.Email });

  if (check) {
    res.status(502).send("not saved duplicate data");
  } else if (!check) {
    const save = await CustomerUserModel.insertMany(req.body);
    res.send("user registerd");
  }
  // console.log("saved")
};
export const DeleteUser = async (req, res) => {
  const save = await CustomerUserModel.findById({
    _id: "625f17e5d19268b751c6324b",
  });
  const deleteuser = await CustomerUserModel.findByIdAndDelete({
    _id: "625f17e5d19268b751c6324b",
  });
  res.send(save);
};
//get customers
export const getcustomers = async (req, res) => {
  console.log("get customer riched");
  const save = await CustomerUserModel.find();
  if (save) {
    res.send(save);
    console.log("feedback route reched data loaded");
  } else res.status(201).send("no data found");
};
//delete customer account
export const deletecustomers = async (req, res) => {
  const deletefeed = await CustomerUserModel.findByIdAndDelete(req.body._id);
  if (deletefeed) {
    res.send("customer deleted");
    console.log("customer deleted");
  } else res.status(201).send("no data found");
};
///logincheck

export const checklogin = async (req, res) => {
  console.log("route reched");
  console.log(req.body);
  const NormalUser = await CustomerUserModel.findOne({
    Email: req.body.Email,
    Password: req.body.Password,
  });
  const AgentUser = await AgentuserModel.findOne({
    Email: req.body.Email,
    Password: req.body.Password,
  });
  const AdminUser = await AdminUserModel.findOne({
    Email: req.body.Email,
    Password: req.body.Password,
  });
  if (NormalUser) {
    console.log("user found");

    const userinfo = {
      FirstName: NormalUser.FirstName,
      LastName: NormalUser.LastName,
      Address: NormalUser.Address,
      Email: NormalUser.Email,
      Phone: NormalUser.Phone,
      Region: NormalUser.Region,
    };
    const usertype = {
      Normaluser: true,
      Agentuser: false,
      Adminuser: false,
      userinfo,
    };

    res.status(200).send(usertype);
  } else if (AgentUser) {
    console.log("user found");

    const userinfo = {
      FirstName: AgentUser.FirstName,
      LastName: AgentUser.LastName,
      Address: AgentUser.Address,
      Email: AgentUser.Email,
    };
    const usertype = {
      Normaluser: false,
      Agentuser: true,
      Adminuser: false,
      userinfo,
    };

    res.status(200).send(usertype);
  } else if (AdminUser) {
    const userinfo = {
      FirstName: AdminUser.FirstName,
      LastName: AdminUser.LastName,

      Email: AdminUser.Email,
    };
    const usertype = {
      Normaluser: false,
      Agentuser: false,
      Adminuser: true,
      userinfo,
    };

    res.status(200).send(usertype);
  } else {
    res.status(400).send("no user found");
  }
};

//make recommendations
export const makerecommendation = async (req, res) => {
  console.log(req.body);
  const save = await RecommendationsModel.insertMany(req.body);
  if (save) {
    res.send("recived");
  }
};
//sendauto email for password recovery

export const sendemailauto = async (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "akibrotsamuelas@gmail.com",
      pass: "0932706240",
    },
  });
  const user = await CustomerUserModel.findOne({
    Email: req.body.Email,
  });
  if (user) {
    const mailOptions = {
      from: "akibrotsamuelas@gmail.com",
      to: user.Email,
      subject: "Sending Email using Node.js from clinedt side",
      html: `<div><h1>Password recoverd seccessfully </h1> <h1>thank you  </h1> <p>your password is</p><u>${user.Password}</u></div>`,
    };

    try {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(404).send("email invalid");
        } else {
          res.status(200).send("email sent" + info.response);
        }
      });
    } catch (error) {
      res.status(404).send("email invalid");
    }
  } else {
    console.log("user not found");
    res.status(404).send("user not found");
  }
};
//send feedbacks
export const sendfeedbacks = async (req, res) => {
  const save = await FeedbackModel.insertMany(req.body);
  if (save) {
    res.send("recived");
    console.log("feedback recived");
  }
};
//getfeedbacks

export const getfeedbacks = async (req, res) => {
  const save = await FeedbackModel.find();
  if (save) {
    res.send(save);
    console.log("feedback route reched data loaded");
  } else res.status(201).send("no data found");
};

//feedbackReadUpdate
export const feedbackReadUpdate = async (req, res) => {
  var data;
  if (req.body.strik == true) {
    data = false;
  } else if (req.body.strik == false) {
    data = true;
  }

  const save = await FeedbackModel.findByIdAndUpdate(req.body._id, {
    readed: data,
  });
  if (save) {
    console.log("feedback read updated");
  } else res.status(201).send("no data found");
};
//delete feedbackes
export const deletefeedback = async (req, res) => {
  const deletefeed = await FeedbackModel.findByIdAndDelete(req.body._id);
  if (deletefeed) {
    res.send("feedbavkdeleted");
    console.log("feedback deleted");
  } else res.status(201).send("no data found");
};

//get recomdations
export const getrecomdations = async (req, res) => {
  const save = await RecommendationsModel.find();
  if (save) {
    res.send(save);
    console.log("getrecomdations route reched data loaded");
  } else res.status(201).send("no data found");
};
////publish Heritages

export const publishHeritage = async (req, res) => {
  console.log("riched heritage ppose");
  const save = await HeritagesModel.insertMany(req.body);
  if (save) {
    res.send("heritage posted");
    console.log("heritage posted");
  }
};

///createagentsaccount
export const createagentsaccount = async (req, res) => {
  console.log("agent create route");
  const save = await AgentuserModel.insertMany(req.body);
  if (save) {
    res.send("agent created");
    console.log("agent created");
  }
};
///get agent accounn user
export const getagentaccount = async (req, res) => {
  const save = await AgentuserModel.find();
  const arr = [];
  if (save) {
    res.send(save);
    console.log("getrecomdations route reched data loaded");
  } else res.status(201).send("no data found");
};

//delete agent account
export const deleteagentaccount = async (req, res) => {
  const deletefeed = await AgentuserModel.findByIdAndDelete(req.body._id);
  if (deletefeed) {
    res.send("feedbavkdeleted");
    console.log("feedback deleted");
  } else res.status(201).send("no data found");
};

//create admin account
export const createadminaccount = async (req, res) => {
  console.log("agent create route");
  const save = await AdminUserModel.insertMany(req.body);
  if (save) {
    res.send("admin created");
    console.log("admin created");
  }
};
//get all admins
export const getadminaccount = async (req, res) => {
  const save = await AdminUserModel.find();
  if (save) {
    res.send(save);
    console.log("get admin accounts data loaded");
  } else res.status(201).send("no data found");
};
//delete admins
export const deleteadminaccounts = async (req, res) => {
  const deletefeed = await AdminUserModel.findByIdAndDelete(req.body._id);
  if (deletefeed) {
    res.send("admin deletede");
    console.log("admin deleted ");
  } else res.status(201).send("no data found");
};

//getstastics
export const getstastics = async (req, res) => {
  const adminnumber = await AdminUserModel.find();
  const agentnumber = await AgentuserModel.find();
  const customernumber = await CustomerUserModel.find();
  const recomendationnum = await RecommendationsModel.find();
  const feedbacknum = await FeedbackModel.find();
  const heritagenumber = await HeritagesModel.find();
  const datatosent = {
    adminnumber: adminnumber.length,
    agentnumber: agentnumber.length,
    customernumber: customernumber.length,
    recomendationnum: recomendationnum.length,
    feedbacknum: feedbacknum.length,
    heritagenumber: heritagenumber.length,
  };

  try {
    res.send(datatosent);
    console.log("statics sent");
  } catch {
    console.log("error happend");
  }
};

//pushnotifications
export const pushnotifications = async (req, res) => {
  // const Agents=await AgentuserModel.find()
  // Agents.Notification
};
