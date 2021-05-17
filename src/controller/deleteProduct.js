import { BadRequestError } from "../utils/errors.js";
import { success } from "../utils/responses.js";

export default (deleteProduct) => async (httpRequest) => {
  const productId = httpRequest.params.id;

  const product = await deleteProduct(productId);

  // Check for empty user
  if (product == undefined)
    throw new BadRequestError("Product could not be deleted");

  return success({ product });
};
