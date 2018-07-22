const Joi = require('joi')

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production'])
    .default('development'),
  GOOGLE_API_KEY: Joi.string().required()
    .description('Key for Google API'),
  GOOGLE_API_SECRET: Joi.string().required()
    .description('Secret for Google API')
}).unknown()
  .required();

const result = Joi.validate(process.env, envVarsSchema);
const error = result.error;
const envVars = result.value;

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  google: {
    key: envVars.GOOGLE_API_KEY,
    secret: envVars.GOOGLE_API_SECRET
  }
};

module.exports = config;
