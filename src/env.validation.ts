import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  // DATABASE_URL: Joi.string().required(),
  PORT: Joi.number().default(3000),
}).unknown(true);
