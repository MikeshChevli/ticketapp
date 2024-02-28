import { TicketInterface } from "@/lib/model/ticketModel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import TicketsStatusBadge from "@/components/TicketsStatusBadge";
import TicketsPriority from "@/components/TicketsPriority";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ReactMarkDown from "react-markdown";
import DeleteButton from "./DeleteButton";

interface Props {
  ticket: TicketInterface;
}

const TicketDetail = ({ ticket }: Props) => {
  const ticketId = JSON.parse(JSON.stringify(ticket._id));

  return (
    <div className="lg:grid lg:grid-cols-4">
      <Card className="mb-4 lg:col-span-3 lg:mr-4">
        <CardHeader>
          <div className="flex justify-between mb-3">
            <TicketsStatusBadge status={ticket.status} />
            <TicketsPriority priority={ticket.priority} />
          </div>
          <CardTitle>{ticket.title}</CardTitle>
          <CardDescription>
            Created:{" "}
            {ticket.createdAt.toLocaleDateString("en-IN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <ReactMarkDown>{ticket.description}</ReactMarkDown>
        </CardContent>
        <CardFooter>
          Updated:{" "}
          {ticket.updatedAt.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </CardFooter>
      </Card>
      <div className="flex lg:flex-col lg:mx-0 gap-2">
        <Link
          href={`/tickets/edit/${ticket._id}`}
          className={`${buttonVariants({
            variant: "default",
          })}`}
        >
          Edit Ticket
        </Link>
        <DeleteButton ticketId={ticketId} />
      </div>
    </div>
  );
};

export default TicketDetail;
