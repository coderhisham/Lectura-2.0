import * as Joi from 'joi';

export const envConfig = () => ({
  port: parseInt(process.env.PORT ?? '3000', 10) || 3000,
});

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(4000),
});
