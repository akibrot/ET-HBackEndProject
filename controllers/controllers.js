import RecommendationsModel from "../model/MakeRecommendationModel.js";
import NewUserModel from "../model/CustomerUserModel.js";
import nodemailer from "nodemailer";
import FeedbackModel from "../model/Feedback.js";
import CustomerUserModel from "../model/CustomerUserModel.js";
import AgentuserModel from "../model/AgentUserModel.js";
import AdminUserModel from "../model/AdminUserModel.js";
import HeritagesModel from "../model/HeritageModel.js";
import expressAsyncHandler from "express-async-handler";
import CategoryList from "../model/Category.js";
import PushNotificationModel from "../model/PushNotificationModel.js";
import dotenv from "dotenv";
dotenv.config();
export const welcome = expressAsyncHandler((req, res) => {
  res.send("server started sucesfully");
});
const name = {
  FirstName: "aki",
  LastName: "sami",
  Address: "dilla",
  Email: "aki@gg.com",
  Password: "123",
};
//Manage Normal User
export const CreateUser = expressAsyncHandler(async (req, res) => {
  // console.log(req.body.Email);
  const check = await CustomerUserModel.findOne({ Email: req.body.Email });

  if (check) {
    res.status(502).send("not saved duplicate data");
  } else if (!check) {
    const save = await CustomerUserModel.insertMany(req.body);
    res.send("user registerd");
  }
  // console.log("saved")
});
export const DeleteUser = expressAsyncHandler(async (req, res) => {
  const save = await CustomerUserModel.findById({
    _id: "625f17e5d19268b751c6324b",
  });
  const deleteuser = await CustomerUserModel.findByIdAndDelete({
    _id: "625f17e5d19268b751c6324b",
  });
  res.send(save);
});
//get customers
export const getcustomers = expressAsyncHandler(async (req, res) => {
  console.log("get customer riched");
  const save = await CustomerUserModel.find();
  if (save) {
    res.send(save);
    console.log("feedback route reched data loaded");
  } else res.status(201).send("no data found");
});
//delete customer account
export const deletecustomers = expressAsyncHandler(async (req, res) => {
  const deletefeed = await CustomerUserModel.findByIdAndDelete(req.body._id);
  if (deletefeed) {
    res.send("customer deleted");
    console.log("customer deleted");
  } else res.status(201).send("no data found");
});
///logincheck

export const checklogin = expressAsyncHandler(async (req, res) => {
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
      FullName: AgentUser.FullName,
      Address: AgentUser.Address,
      Email: AgentUser.Email,
      Phone: AgentUser.Phone,
      Profilepic: AgentUser.Profilepic,
      Notification: AgentUser.Notification,
      Recommended: AgentUser.Recommended,
      Posted: AgentUser.Posted,
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
      FullName: AdminUser.FullName,
      Address: AdminUser.Address,
      Email: AdminUser.Email,
      Phone: AdminUser.Phone,
      Profile: AdminUser.Profilepic,
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
});

//make recommendations
export const makerecommendation = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const save = await RecommendationsModel.insertMany(req.body);
  if (save) {
    res.send("recived");
  }
});
//sendauto email for password recovery

export const sendemailauto = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: 'akibrotsamuelas@gmail.com',
    pass: 'kbjcmbhlvvyglcfu'
    },
  });
  const user = await CustomerUserModel.findOne({
    Email: req.body.Email,
  });
  const admin = await AdminUserModel.findOne({
    Email: req.body.Email,
  });
  const agent = await AgentuserModel.findOne({
    Email: req.body.Email,
  });
  if (user) {
    const mailOptions = {
      from: "xxx",
      // to: user.Email,
      to:"one30836@gmail.com",
      subject: "Sending bbb cccxxx",
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
});
//send feedbacks
export const sendfeedbacks = expressAsyncHandler(async (req, res) => {
  const save = await FeedbackModel.insertMany(req.body);
  if (save) {
    res.send("recived");
    console.log("feedback recived");
  }
});
//getfeedbacks

export const getfeedbacks = expressAsyncHandler(async (req, res) => {
  const save = await FeedbackModel.find();
  if (save) {
    res.send(save);
    console.log("feedback route reched data loaded");
  } else res.status(201).send("no data found");
});

//feedbackReadUpdate
export const feedbackReadUpdate = expressAsyncHandler(async (req, res) => {
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
});
//delete feedbackes
export const deletefeedback = expressAsyncHandler(async (req, res) => {
  const deletefeed = await FeedbackModel.findByIdAndDelete(req.body._id);
  if (deletefeed) {
    res.send("feedbavkdeleted");
    console.log("feedback deleted");
  } else res.status(201).send("no data found");
});

//get recomdations
export const getrecomdations = expressAsyncHandler(async (req, res) => {
  const save = await RecommendationsModel.find();
  if (save) {
    res.send(save);
    console.log("getrecomdations route reched data loaded");
  } else res.status(201).send("no data found");
});
////publish Heritages

export const publishHeritage = expressAsyncHandler(async (req, res) => {
  console.log("riched heritage ppose");
  const save = await HeritagesModel.insertMany(req.body);
  if (save) {
    res.send("heritage posted");
    console.log("heritage posted");
  }
});

///createagentsaccount
export const createagentsaccount = expressAsyncHandler(async (req, res) => {
  console.log("agent create route");
  const save = await AgentuserModel.insertMany(req.body);
  if (save) {
    res.send("agent created");
    console.log("agent created");
  }
});
///get agent accounn user
export const getagentaccount = expressAsyncHandler(async (req, res) => {
  const save = await AgentuserModel.find();
  const arr = [];
  if (save) {
    res.send(save);
    console.log("getrecomdations route reched data loaded");
  } else res.status(201).send("no data found");
});

//delete agent account
export const deleteagentaccount = expressAsyncHandler(async (req, res) => {
  const deletefeed = await AgentuserModel.findByIdAndDelete(req.body._id);
  if (deletefeed) {
    res.send("feedbavkdeleted");
    console.log("feedback deleted");
  } else res.status(201).send("no data found");
});

//create admin account
export const createadminaccount = expressAsyncHandler(async (req, res) => {
  console.log("agent create route");
  const save = await AdminUserModel.insertMany(req.body);
  if (save) {
    res.send("admin created");
    console.log("admin created");
  }
});
//get all admins
export const getadminaccount = expressAsyncHandler(async (req, res) => {
  const save = await AdminUserModel.find();
  if (save) {
    res.send(save);
    console.log("get admin accounts data loaded");
  } else res.status(201).send("no data found");
});
//delete admins
export const deleteadminaccounts = expressAsyncHandler(async (req, res) => {
  const deletefeed = await AdminUserModel.findByIdAndDelete(req.body._id);
  if (deletefeed) {
    res.send("admin deletede");
    console.log("admin deleted ");
  } else res.status(201).send("no data found");
});

//getstastics
export const getstastics = expressAsyncHandler(async (req, res) => {
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
});

//pushnotifications
export const pushnotifications = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const insertinnotificationdb = await PushNotificationModel.insertMany(
    req.body
  );
  if (insertinnotificationdb) {
    const loadnoti = await PushNotificationModel.find();
    // console.log(loadnoti);
    const Agents = await AgentuserModel.updateMany({ Notification: loadnoti });
    if (Agents) {
      res.send("notifications updated");
      console.log("noti inserted");
    }
  }
  const test = [
    {
      subject: "test subject",
      discription: "test description",
    },
    {
      subject: "test subject 2",
      discription: "test description 2",
    },
    {
      subject: "test subject 4",
      discription: "test description 2",
    },
  ];
  // const Agents = await AgentuserModel.updateMany({Notification:test});
  // const Agents2 = await AgentuserModel.up({Notification:test});
  // const test1=Agents.filter((f)=>f.Notification.length>0)
  // console.log(test1)
  // if (Agents) {
  //   console.log("data saved");
  //   res.send("inserted")
  // }
});
//create category
export const createcategory = expressAsyncHandler(async (req, res) => {
  console.log("category  route");
  const save = await CategoryList.insertMany(req.body);
  if (save) {
    res.send("category created");
    console.log("category  created");
  }
});
//get all category
export const getallcategory = expressAsyncHandler(async (req, res) => {
  const save = await CategoryList.find();
  if (save) {
    res.send(save);
    console.log("get admin accounts data loaded");
  } else res.status(201).send("no data found");
});
//delete category
export const deletecategory = expressAsyncHandler(async (req, res) => {
  const deletefeed = await CategoryList.findByIdAndDelete(req.body._id);
  if (deletefeed) {
    res.send("category deletede");
    console.log("category deleted ");
  } else res.status(201).send("no data found");
});

//searchforheritages
export const searchforheritages = expressAsyncHandler(async (req, res) => {
  const searchkey = req.body.searchkey;
  // const save = await HeritagesModel.find();
  const save = await HeritagesModel.find({
    NameOfHeritage: { $regex: searchkey, $options: "-i" },
  });

  if (save) {
    res.send(save);
    console.log("search  data sented");
    // console.log(save);
  }
});
//get single heritages
export const getsingleheritage = expressAsyncHandler(async (req, res) => {
  const id = req.body.id;
  const save = await HeritagesModel.findById({
    _id: id,
  });

  if (save) {
    res.send(save);
    console.log("single heritage data sented");
  }
});

//getrelatedheritages
//get single heritages
export const getrelatedheritages = expressAsyncHandler(async (req, res) => {
  const category = req.body.test.category;
  console.log(req.body);
  const save = await HeritagesModel.find({
    category: category,
  });

  if (save) {
    res.send(save);
    console.log("related data fatched");
  }
});
