import Ticket, { TicketInterface } from "@/lib/model/ticketModel";
import dynamic from "next/dynamic";
import React from "react";

interface Props {
  params: { id: string };
}

const TicketsForm = dynamic(() => import("@/components/TicketsForm"), {
  ssr: false,
});

const EditTicket = async ({ params }: Props) => {
  const id = params;
  try {
    const ticket: TicketInterface | null = await Ticket.findById(id).lean();

    if (!ticket) {
      return <p className="text-destructive">Ticket not found</p>;
    }
    const ticketData = JSON.parse(JSON.stringify(ticket));

    return <TicketsForm ticket={ticketData} />;
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return <p className="text-destructive">Error fetching ticket</p>;
  }
};

export default EditTicket;
