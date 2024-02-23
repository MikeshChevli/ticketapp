import mongoose, { Document, Schema } from "mongoose";

export interface TicketInterface extends Document {
  title: string;
  description?: string;
  status: "OPEN" | "STARTED" | "CLOSED";
  priority: "LOW" | "MEDIUM" | "HIGH";
  createdAt: Date;
  updatedAt: Date; 
} // I want to use this same interface as a props in different component but when I import in that component, I dont receive this properties

const ticketSchema: Schema<TicketInterface> = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["OPEN", "STARTED", "CLOSED"],
    default: "OPEN",
  },
  priority: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"],
    default: "LOW",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
