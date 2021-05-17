import JWT from "jsonwebtoken";
import { ForbiddenError, UnauthorizedError } from "./errors.js";

const verifyToken = (token, secret) => {
  try {
    return JWT.verify(token, secret);
  } catch (err) {
    if (err.name === "TokenExpiredError")
      throw new UnauthorizedError("Token Expired");
    else if (err.name === "JsonWebTokenError")
      throw new ForbiddenError("Invalid Token");
  }
};

export { verifyToken };
