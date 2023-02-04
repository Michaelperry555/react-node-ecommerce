import express from "express";

const authRouter = express.Router();

// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";
// controllers
import {
  register,
  login,
  secret,
  updateProfile,
  getOrders,
  getAllOrders,
} from "../controllers/auth.js";

authRouter.post("/api/register", register);
authRouter.post("/api/login", login);


authRouter.put("/api/profile", requireSignin, updateProfile);

// testing
authRouter.get("/api/secret", requireSignin, isAdmin, secret);
authRouter.get("/api/auth-check", requireSignin, (req, res) => {
  res.json({ ok: true });
});
authRouter.get("/api/admin-check", requireSignin, isAdmin, (req, res) => {
  res.json({ ok: true });
});

// orders
authRouter.get("/api/orders", requireSignin, getOrders);
authRouter.get("/api/all-orders", requireSignin, isAdmin, getAllOrders);

export default authRouter;
