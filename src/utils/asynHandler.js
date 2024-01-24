const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};



export { asyncHandler };
 

// basic
// const asyncHandler = () => {}
// with function passing
// const asyncHandler = (fn) => {() => {}}
//or
// const asyncHandler = (fn) => async() => {}

/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(res,res,next)
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
*/
