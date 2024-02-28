import Ticket from "@/lib/model/ticketModel";
import { ticketSchema } from "@/validationSchemas/ticket";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

export async function PATCH(req: NextRequest, { params }: Props) {
  try {
    const body = await req.json();
    const validation = ticketSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const ticket = await Ticket.findByIdAndUpdate(params, body, {
      new: true,
    });

    if (!ticket)
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });

    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error updating ticket",
        error: error,
      },
      { status: 500 }
    );
  }
}
