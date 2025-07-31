export class ErrorHandler {
  static handle(error, _, response, __) {
    console.log(error.stack);
    response.status(500).json({
      message: "Internal Server Error",
      error: "An unexpected error occurred",
    });
  }
}
