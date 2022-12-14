const { Schema, model } = require("mongoose");
const handleSaveErrors = require("../middlewares/handleSaveErrors");

const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegEx,
    },
    token: {
      type: String,
      default: "",
    },
    results: {
      type: Number,
      default: 0,
    },
    testType: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleSaveErrors);

const User = model("user", userSchema);

module.exports = { User };

  // todo remove result and testtype from UserSchema
  // todo change file name
  // todo  add RegEX to validate email to USERSCHEMA