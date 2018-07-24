const Joi = require('joi')

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production'])
    .default('development'),
  GOOGLE_SHEET_ID: Joi.string().required()
    .description('Google Sheets ID'),
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
    sheetId: envVars.GOOGLE_SHEET_ID
  }
};

module.exports = config;
