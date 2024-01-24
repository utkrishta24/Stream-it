class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went Wrong",
    errors = [],
    stackk = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stackk;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
