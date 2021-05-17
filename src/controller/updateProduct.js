import { BadRequestError } from "../utils/errors.js";
import { success } from "../utils/responses.js";

export default (getProduct) => async (httpRequest) => {
  const productId = httpRequest.params.id;

  const product = await getProduct(productId, httpRequest.body);

  // Check for empty user
  if (product == undefined) throw new BadRequestError("User not found");

  return success({ product });
};
