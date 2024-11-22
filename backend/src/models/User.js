const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
