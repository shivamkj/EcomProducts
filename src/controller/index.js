import _getProduct from "./getProduct.js";
import _createProduct from "./createProduct.js";
import _updateProduct from "./updateProduct.js";
import _deleteProduct from "./deleteProduct.js";

import {
  getProduct as __getProduct,
  createProduct as __createProduct,
  updateProduct as __updateProduct,
  deleteProduct as __deleteProduct,
} from "../repository/MemoryRepository.js";

const getProduct = _getProduct(__getProduct);
const createProduct = _createProduct(__createProduct);
const updateProduct = _updateProduct(__updateProduct);
const deleteProduct = _deleteProduct(__deleteProduct);

export { getProduct, createProduct, updateProduct, deleteProduct };
