import Ticket from "@/lib/model/ticketModel";
import { ticketSchema } from "@/validationSchemas/ticket";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = ticketSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }
    const newTicket = new Ticket(body);
    await newTicket.save();

    return NextResponse.json(newTicket, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: "Error creating ticket",
      error: error,
    });
  }
}
