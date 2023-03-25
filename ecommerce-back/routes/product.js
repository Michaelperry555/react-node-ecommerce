import express from "express";
import formidable from "express-formidable";

const productRouter = express.Router();

// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";
// controllers
import {
  create,
  list,
  read,
  photo,
  remove,
  update,
  filteredProducts,
  productsCount,
  listProducts,
  productsSearch,
  relatedProducts,
  getToken,
  processPayment,
  orderStatus,
} from "../controllers/product.js";

productRouter.post("/api/product", requireSignin, isAdmin, formidable(), create);
productRouter.get("/api/products", list);
productRouter.get("/api/product/:slug", read);
productRouter.get("/api/product/photo/:productId", photo);
productRouter.delete("/api/product/:productId", requireSignin, isAdmin, remove);
productRouter.put("/api/product/:productId", requireSignin, isAdmin, formidable(), update);
productRouter.post("/api/filtered-products", filteredProducts);
productRouter.get("/api/products-count", productsCount);
productRouter.get("/api/list-products/:page", listProducts);
productRouter.get("/api/products/search/:keyword", productsSearch);
productRouter.get("/api/related-products/:productId/:categoryId", relatedProducts);

productRouter.get("/api/braintree/token", getToken);
productRouter.post("/api/braintree/payment", requireSignin, processPayment);
productRouter.put("/api/order-status/:orderId", requireSignin, isAdmin, orderStatus);

export default productRouter;
