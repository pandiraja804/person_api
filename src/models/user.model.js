const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    phone_number: {
      type: Number,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports.userModel = model('users', userSchema);
