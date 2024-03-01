import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    clave: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
