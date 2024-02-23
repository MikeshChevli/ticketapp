import connectDB from "@/lib/db";
import Ticket from "@/lib/model/ticketModel";
import { ticketSchema } from "@/validationSchemas/ticket";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();
    const validation = ticketSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }
    const ticket = await Ticket.create({ data: { ...body } });
    return NextResponse.json(ticket, { status: 201 }); // 201 Created
  } catch (error) {
    return NextResponse.json({
      message: "Error creating ticket",
      error: error,
    });
  }
}
