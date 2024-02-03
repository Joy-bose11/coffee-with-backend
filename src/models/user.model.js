const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required."],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },

    fullname: {
      type: String,
      required: [true, "Full Name is required."],
      trim: true,
      index: true,
    },

    avatar: {
      trye: String,
      required: [true, "Profile image is required."],
    },

    coverImage: {
      type: String,
    },

    watchHistory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },

    password: {
      type: String,
      required: [true, "Password is required."],
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);