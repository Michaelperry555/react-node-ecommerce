import express from "express";

const categoryRouter = express.Router();

// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";
// controllers
import {
  create,
  update,
  remove,
  list,
  read,
  productsByCategory,
} from "../controllers/category.js";

categoryRouter.get("/api/categories", list);
categoryRouter.get("/api/category/:slug", read);
categoryRouter.get("/api/products-by-category/:slug", productsByCategory);
categoryRouter.post("/api/category", requireSignin, isAdmin, create);
categoryRouter.put("/api/category/:categoryId", requireSignin, isAdmin, update);
categoryRouter.delete("/api/category/:categoryId", requireSignin, isAdmin, remove);


export default categoryRouter;
