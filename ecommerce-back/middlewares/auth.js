import jwt from "jsonwebtoken";
import User from "../models/user.js";

export function requireSignin (req, res, next) {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json(err);
  }
};

export async function isAdmin (req, res, next) {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send("Unauthorized user");
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
