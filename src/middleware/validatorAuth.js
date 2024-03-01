import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const authValidator = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ mensaje: ["token requerido"] });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ mensaje: ["token no valido"] });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } catch (error) {
    res.status(500).json({ message: [error.message] });
    console.log(error.message);
  }
};
