const req = require('express/lib/request');
const mongoose = require('mongoose');
const { urlREgex } = require('../utils/regex');

const urlRegex =  /^(https?:\/\/)(www\.)?[\w.-]+\.[a-z]{2,}([\/\w\-._~:?#[\]@!$&'()*+,;=%]*)#?$/i;


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    about: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    avatar: {
      type: String,
      required: true,
      validate: {
        validator: (v) => urlRegex.test(v),
        message: (props) => `${props.value} no es una URL válida`,
      },
    },
      },
      { versionKey: false  }
);

module.exports = mongoose.model('user', userSchema);
