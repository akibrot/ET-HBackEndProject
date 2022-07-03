import express from "express";
import {
  checklogin,
  createadminaccount,
  createagentsaccount,
  CreateUser,
  deleteadminaccounts,
  deleteagentaccount,
  deletefeedback,
  DeleteUser,
  feedbackReadUpdate,
  getadminaccount,
  getagentaccount,
  getfeedbacks,
  getrecomdations,
  makerecommendation,
  publishHeritage,
  sendemailauto,
  sendfeedbacks,
  welcome,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", welcome);
router.post("/createuserNormaluser", CreateUser);
router.post("/cheacklogin", checklogin);
router.post("/deleteuser", DeleteUser);
router.post("/sendemail", sendemailauto);

//make recom route
router.post("/makerecommendation", makerecommendation);
//sendfeedback
router.post("/sendfeedbacks", sendfeedbacks);
//getFeedback
router.get("/getfeedbacks",getfeedbacks)
//feedback read update
router.post("/feedbackReadUpdate",feedbackReadUpdate)
//feedback deleting 
router.post("/deletefeedback",deletefeedback)
//get recomdations
router.get("/getrecomdations",getrecomdations)
//publish heritage
router.post("/publishHeritage",publishHeritage)
///create agent account
router.post("/createagentsaccount",createagentsaccount)
//get agent account
router.get("/getagentaccount",getagentaccount)
//deleting agent
router.post("/deleteagentaccount",deleteagentaccount)
//createing admin accounts
router.post("/createadminaccount",createadminaccount)
//get admin accounts
router.get("/getadminaccount",getadminaccount)
//deleting admins 
router.post("/deleteadminaccounts",deleteadminaccounts)

















export default router;
