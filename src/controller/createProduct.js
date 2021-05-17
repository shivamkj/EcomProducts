import { BadRequestError } from "../utils/errors.js";
import { success } from "../utils/responses.js";

export default (createProduct) => async (httpRequest) => {
  const product = httpRequest.body;

  const productId = await createProduct(product);

  // Check for empty user
  if (productId == undefined)
    throw new BadRequestError("Product could not be created");

  return success({ productId });
};
