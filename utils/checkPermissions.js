const CustomError = require("../errors");
const checkPermissions = (requestUser, resourseUserId) => {
  // console.log(requestUser);
  // console.log(resourseUserId);
  // console.log(typeof requestUser);
  if (requestUser.role === "admin") return;
  if (requestUser.userId === resourseUserId.toString()) return;

  throw new CustomError.UnauthorizedError("Not unauthorized to access this route");
};

module.exports = checkPermissions;
