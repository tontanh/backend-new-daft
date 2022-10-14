const Joi = require( "joi");
// import passwordComplexity = require( "joi-password-complexity";

const signUpBodyValidation = (body) => {
  const schema = Joi.object({
    userName: Joi.string().required().min(3).label("User Name"),
    email: Joi.string().email().required().label("Email"),
    // password: passwordComplexity().required().label("Password"),
    password: Joi.string().min(6).required().label("Password"),
  });
  return schema.validate(body);
};

const logInBodyValidation = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(body);
};

const refreshTokenBodyValidation = (body) => {
  const schema = Joi.object({
    refreshToken: Joi.string().required().label("Refresh Token"),
  });
  return schema.validate(body);
};

module.exports= {
  signUpBodyValidation,
  logInBodyValidation,
  refreshTokenBodyValidation,
};
