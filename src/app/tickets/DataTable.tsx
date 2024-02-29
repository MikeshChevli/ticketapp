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
import Link from "next/link";
import React from "react";
import { ArrowDown } from "lucide-react";
import { SearchParams } from "./page";

interface Props {
  tickets: TicketInterface[];
  searchParams: SearchParams;
}

const DataTable = ({ tickets, searchParams }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Link href={{ query: { ...searchParams, orderBy: "title" } }}>
                  Title
                </Link>
                {"title" === searchParams.orderBy && (
                  <ArrowDown className="inline p-1" />
                )}
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <Link
                    href={{ query: { ...searchParams, orderBy: "status" } }}
                  >
                    Status
                  </Link>
                  {"status" === searchParams.orderBy && (
                    <ArrowDown className="inline p-1" />
                  )}
                </div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <Link
                    href={{ query: { ...searchParams, orderBy: "priority" } }}
                  >
                    Priority
                  </Link>
                  {"priority" === searchParams.orderBy && (
                    <ArrowDown className="inline p-1" />
                  )}
                </div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <Link
                    href={{ query: { ...searchParams, orderBy: "createdAt" } }}
                  >
                    CreatedAt
                  </Link>
                  {"createdAt" === searchParams.orderBy && (
                    <ArrowDown className="inline p-1" />
                  )}
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets &&
              tickets.map((ticket) => (
                <TableRow key={ticket._id} data-href="/">
                  <TableCell>
                    <Link href={`/tickets/${ticket._id}`}>{ticket.title}</Link>
                  </TableCell>
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
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
