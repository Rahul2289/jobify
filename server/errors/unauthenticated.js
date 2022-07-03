import { StatusCodes } from "http-status-codes";
import CustomApiError from "./custom-api.js";

class UnAuthenticatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default UnAuthenticatedError;
