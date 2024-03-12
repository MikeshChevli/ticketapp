import mongoose, { Document, Schema } from "mongoose";
import { TicketInterface } from "./ticketModel";

export interface UserInterface extends Document {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "TECH" | "USER";
  assignedTickets: TicketInterface[];
}

const userSchema: Schema<UserInterface> = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
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
  role: {
    type: String,
    default: "USER",
    enum: ["ADMIN", "TECH", "USER"],
  },
  assignedTickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
});

const User = mongoose.model.User || mongoose.model("User", userSchema);
export default User;
