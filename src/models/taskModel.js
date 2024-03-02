import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const taskModel = mongoose.model("task", taskSchema);

export default taskModel;
