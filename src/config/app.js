import express from "express";
import userRoute from "../routes/user.routes.js";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
// import { URL_CLIENT } from "./config.js";

const app = express();
// app.use(
//   cors({
//     origin: URL_CLIENT,
//   })
// );

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", userRoute);

app.get("/ping", (req, res) => {
  res.json({ data: "pong" });
});

export default app;
