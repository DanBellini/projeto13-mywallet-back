import joi from "joi";

const authRegisterSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});

const authSingInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export { authRegisterSchema, authSingInSchema };