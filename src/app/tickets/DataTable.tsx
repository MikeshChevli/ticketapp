import TicketsPriority from "@/components/TicketsPriority";
import TicketsStatusBadge from "@/components/TicketsStatusBadge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { TicketInterface } from "@/lib/model/ticketModel";
import React from "react";

interface Props {
  tickets: TicketInterface[];
}

const DataTable = ({ tickets }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>
                <div className="flex justify-center">Status</div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">Priority</div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">CreatedAt</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((ticket) => (
                  <TableRow key={ticket._id} data-href="/">
                    <TableCell>{ticket.title}</TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TicketsStatusBadge status={ticket.status} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TicketsPriority priority={ticket.priority} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        {ticket.createdAt.toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
