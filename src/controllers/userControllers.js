import { createToken } from "../libs/jwt.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const saveUser = async (req, res) => {
  try {
    const { usuario, correo, clave } = req.body;

    const userFound = await userModel.findOne({ correo: correo });
    if (userFound) {
      return res.status(400).json({ mensaje: ["usuario ya existe"] });
    }

    const claveHash = await bcrypt.hash(clave, 10);

    const newUser = new userModel({
      usuario,
      correo,
      clave: claveHash,
    });

    await newUser.save();

    res.status(201).json({ mensaje: ["usuario registrado"] });
  } catch (error) {
    res.status(500).json({ mensaje: [error.message] });
    console.log(error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { correo, clave } = req.body;

    const userFound = await userModel.findOne({ correo: correo });
    if (!userFound) {
      return res.status(400).json({ mensaje: ["usuario no existe"] });
    }

    const claveisMatch = await bcrypt.compare(clave, userFound.clave);
    if (!claveisMatch) {
      return res.status(400).json({ mensaje: ["la clave no coincide"] });
    }

    const token = await createToken({ id: userFound._id });

    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24,
      secure: false,
      httpOnly: true,
      sameSite: "none",
    });

    res.status(200).json({
      id: userFound._id,
      usuario: userFound.usuario,
      correo: userFound.correo,
    });
  } catch (error) {
    res.status(500).json({ mensaje: [error.message] });
    console.log(error.message);
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ mensaje: [error.message] });
    console.log(error.message);
  }
};
