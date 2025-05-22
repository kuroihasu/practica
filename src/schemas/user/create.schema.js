import Joi from 'joi';

const createSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8).max(20),
});

export default createSchema;