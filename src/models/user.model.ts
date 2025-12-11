// src/models/user.model.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  interests: { type: [String], required: true },
  budget: { type: Number, required: true },
  adventureLevel: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model("User", userSchema);