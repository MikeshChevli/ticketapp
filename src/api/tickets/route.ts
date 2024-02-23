import connectDB from "@/lib/db";
import ticketModel from "@/lib/model/ticketModel";
import { NextResponse } from "next/server";

export async function POST() {
  await connectDB();
  try {
    const sample = {
      title: "Network Connectivity Issue",
      description:
        "Users are experiencing intermittent network connectivity problems. Investigation needed to identify and resolve the issue.",
      status: "OPEN",
      priority: "MEDIUM",
    };
    const ticket = new ticketModel(sample);
    await ticket.save();
    return NextResponse.json({
      message: "Ticket created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error creating ticket",
      error: error,
    });
  }
}
