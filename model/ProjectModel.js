import mongoose from "mongoose";

const projectschema = mongoose.Schema({
  Title: { type: String },
  Task: { type: Array },
});

const ProjectModel = mongoose.model("ProjectModel", projectschema);
export default ProjectModel;
