const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String,
      required: [true, "Video is required."],
    },

    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
    },

    title: {
      type: String,
      required: [true, "Video title is required."],
    },

    description: {
      type: String,
      required: [true, "Video description is required."],
    },

    duration: {
      type: Number,
      required: [true, "Video duration is required"],
    },

    views: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
