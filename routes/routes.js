import express from "express";
import {
  checklogin,
  CreateUser,
  deletefeedback,
  DeleteUser,
  feedbackReadUpdate,
  getfeedbacks,
  makerecommendation,
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



export default router;
