import mongoosePackage from 'mongoose';
import {MIN_AGE, MAX_AGE} from '../lib/constants';
const {Schema, model} = mongoosePackage; 

const contactSchema = new Schema({
  name: {type: String, require: true},
  age: {type: Number, default: null, min: MIN_AGE, max: MAX_AGE},
  email: {type: String, require: true},
  phone: {type: String, require: true},
  favorite: {type: Boolean, default: false}
}, {
  timestamps: true,

  toJSON: {
    transform: function(doc, ret) {
      delete ret._id;
      return ret;
    },
    virtuals: true,
    versionKey: false
  }
}) 

const Contact = model('contact', contactSchema);

export default Contact;