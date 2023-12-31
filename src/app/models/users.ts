import mongoose from "mongoose";
import {GetUserType, GetUsersType} from "@/app/types/userTypes"


// Check if the model already exists
const UserModel = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
}));

export { UserModel };

