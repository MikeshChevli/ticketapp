import Ticket, { TicketInterface } from "@/lib/model/ticketModel";
import React from "react";
import TicketDetail from "./TicketDetail";

interface Props {
  params: { id: string };
}
const ViewTicket = async ({ params }: Props) => {
  const id = params;
  try {
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return <p className="text-destructive">Ticket not found</p>;
    }

    return <TicketDetail ticket={ticket} />;
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return <p className="text-destructive">Ticket not found!!...</p>;
  }
};

export default ViewTicket;
