import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  tutors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tutor",
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  coursePrice: {
    type: Number,
    required: true,
    default: 0,
  },
  courseDescription: {
    type: String,
  },
  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

export const Course = mongoose.model("Course", courseSchema);
