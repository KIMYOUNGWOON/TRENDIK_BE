const { model, Schema } = require('mongoose');
const { generate } = require('shortid');

const shortId = {
  type: String,
  default: () => {
    return generate();
  },
  required: true,
  index: true,
  unique: true,
};

const userSchema = new Schema(
  {
    userId: shortId,
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    requiredAgree: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);

module.exports = User;
