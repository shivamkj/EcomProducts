import { Router } from "express";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/index.js";

import handler from "./expressInterface.js";

const router = Router();

router.get("/product/:id", handler(getProduct));
router.post("/product", handler(createProduct));
router.patch("/product/:id", handler(updateProduct));
router.delete("/product/:id", handler(deleteProduct));

export default router;
