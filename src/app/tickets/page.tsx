import Ticket from "@/lib/model/ticketModel";
import React from "react";
import DataTable from "./DataTable";
import connectDB from "@/lib/db";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/Pagination";
import StatusFilter from "@/components/StatusFilter";

interface SearchParams {
  status: "OPEN" | "STARTED" | "CLOSED";
  page: string;
}

const Tickets = async ({ searchParams }: { searchParams: SearchParams }) => {
  await connectDB();
  const pageSize = 10;
  let where = {};
  const orderBy = "createdAt";

  const page = parseInt(searchParams.page) || 1;

  const statuses = ["OPEN", "STARTED", "CLOSED"];

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  if (status) {
    where = {
      status,
    };
  } else {
    where = {
      status: { $nin: ["CLOSED"] },
    };
  }
  const ticketCount = await Ticket.countDocuments(where);

  const tickets = await Ticket.find(where)
    .sort({ [orderBy]: -1 })
    .limit(pageSize)
    .skip((page - 1) * pageSize);

  return (
    <div>
      <div className="flex justify-between">
        <Link
          href="/tickets/new"
          className={buttonVariants({ variant: "default" })}
        >
          New Tickets
        </Link>
        <StatusFilter />
      </div>
      <DataTable tickets={tickets} />
      <Pagination
        itemCount={ticketCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  );
};

export default Tickets;
