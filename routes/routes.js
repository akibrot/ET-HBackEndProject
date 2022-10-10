import express from "express";
import {
  banuserfromthesystem,
  checklogin,
  createadminaccount,
  createagentsaccount,
  createcategory,
  createTourAgents,
  CreateUser,
  deleteadminaccounts,
  deleteagentaccount,
  deletecategory,
  deletecustomers,
  deletefeedback,
  deleterecommended,
  Deletetouragents,
  DeleteUser,
  feedbackReadUpdate,
  getadminaccount,
  getagentaccount,
  getallcategory,
  getcustomers,
  getfeedbacks,
  getheritagesbypublisher,
  GetNotificationsofagent,
  getpopularheritages,
  getrecomdations,
  GetRecommendationsofagent,
  getrelatedheritages,
  getsingleheritage,
  getstastics,
  gettouragentaccound,
  getTouragents,
  makepopularheritage,
  makerecommendation,
  publishHeritage,
  pullnotifications,
  pushnotifications,
  pushRecommendations,
  searchforheritages,
  sendemailauto,
  sendfeedbacks,
  updateagentuser,
  welcome,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", welcome);
router.post("/createuserNormaluser", CreateUser);
router.post("/cheacklogin", checklogin);
router.post("/deleteuser", DeleteUser);
router.post("/sendemail", sendemailauto);

//get all customers
router.get("/getcustomers", getcustomers);
//delete customer
router.post("/deletecustomers", deletecustomers);

//make recom route
router.post("/makerecommendation", makerecommendation);
//sendfeedback
router.post("/sendfeedbacks", sendfeedbacks);
//getFeedback
router.get("/getfeedbacks", getfeedbacks);
//feedback read update
router.post("/feedbackReadUpdate", feedbackReadUpdate);
//feedback deleting
router.post("/deletefeedback", deletefeedback);
//get recomdations
router.get("/getrecomdations", getrecomdations);
//publish heritage
router.post("/publishHeritage", publishHeritage);
///create agent account
router.post("/createagentsaccount", createagentsaccount);
//get agent account
router.get("/getagentaccount", getagentaccount);
//deleting agent
router.post("/deleteagentaccount", deleteagentaccount);
//update agent account
router.post("/updateagentuser", updateagentuser);

//createing admin accounts
router.post("/createadminaccount", createadminaccount);
//get admin accounts
router.get("/getadminaccount", getadminaccount);
//deleting admins
router.post("/deleteadminaccounts", deleteadminaccounts);
//get stastics
router.get("/getstastics", getstastics);
//push notifications
router.post("/pushnotifications", pushnotifications);
//pull notifications
router.post("/pullnotifications", pullnotifications);

//create category list
router.post("/createcategory", createcategory);
//get all category
router.get("/getallcategory", getallcategory);
//deletecategory
router.post("/deletecategory", deletecategory);
//searchforheritages
router.post("/searchforheritages", searchforheritages);
//getsingleheritage
router.post("/getsingleheritage", getsingleheritage);
//get related
router.post("/getrelatedheritages", getrelatedheritages);
//getheritagesbypublisher
router.post("/getheritagesbypublisher", getheritagesbypublisher);
//tour agents model
//create tour agents
router.post("/createTourAgents", createTourAgents);
//get all tour agents
router.get("/getTouragents", getTouragents);
//delete tour agents
router.post("/Deletetouragents", Deletetouragents);
//pushRecommendations
router.post("/pushRecommendations", pushRecommendations);
//GetRecommendationsofagent
router.post("/GetRecommendationsofagent", GetRecommendationsofagent);
//get notifications of agent
router.post("/GetNotificationsofagent", GetNotificationsofagent);
//makepopularheritage
router.post("/makepopularheritage", makepopularheritage);
//getpopularheritages
router.get("/getpopularheritages", getpopularheritages);
//deleterecommended
router.post("/deleterecommended", deleterecommended);

//banuserfromthesystem
router.post("/banuserfromthesystem", banuserfromthesystem);

//gettouragentaccound
router.post("/gettouragentaccound", gettouragentaccound);

export default router;
