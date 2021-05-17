import { BadRequestError } from "../utils/errors.js";
import { success } from "../utils/responses.js";

export default (getProduct) => async (httpRequest) => {
  console.log("getProduct");
  const productId = httpRequest.params.id;

  console.log(productId);

  const product = await getProduct(productId);

  // Check for empty user
  if (product == undefined) throw new BadRequestError("Product not found");

  return success({ product });
};
