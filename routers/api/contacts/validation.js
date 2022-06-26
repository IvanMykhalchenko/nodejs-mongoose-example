import joi from 'joi';
import { MAX_AGE, MIN_AGE } from '../../../lib/constants';
import { StatusCodes } from 'http-status-codes';

/**
 * Schemas
 */
const addContactSchema = joi.object({
  name: joi.string().min(2).max(20).required(),
  age: joi.number().min(MIN_AGE).max(MAX_AGE).required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
  favorite: joi.boolean()
})

/**
 * Schemas
 */
const updateContactSchema = joi.object({
  name: joi.string().min(2).max(20),
  age: joi.number().min(MIN_AGE).max(MAX_AGE),
  email: joi.string().email(),
  phone: joi.string(),
}).or('name', 'age', 'email', 'phone')

const deleteContactSchema = joi.object({
  id: joi.string().required()
})

const updateFavoriteContactSchema = joi.object({
  favorite: joi.bool().required()
})

/**
 * Validator functions
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const checkValidationBySchema = async(schema, data, res, next) => {
  try {
    await schema.validateAsync(data);
    next();
  } catch(err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      type: 'error',
      message: err.message.replace(/\"/g, '')}
    )
  }
}

const addContactValidator = async (req, res, next) => {
  checkValidationBySchema(addContactSchema, req.body, res, next)
}

const deleteContactValidator = async (req, res, next) => {
  checkValidationBySchema(deleteContactSchema, {id: req.params.id}, res, next)
}

const updateContactValidator = async (req, res, next) => {
  checkValidationBySchema(updateContactSchema, req.body, res, next)
}

const updateFavoriteContactValidator = async (req, res, next) => {
  checkValidationBySchema(updateFavoriteContactSchema, req.body, res, next)
}

export default {
  addContactValidator,
  deleteContactValidator,
  updateContactValidator,
  updateFavoriteContactValidator
};