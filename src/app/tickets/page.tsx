import Ticket from "@/lib/model/ticketModel";
import React from "react";
import DataTable from "./DataTable";
import connectDB from "@/lib/db";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/Pagination";

interface SearchParams {
  page: string;
}

const Tickets = async ({ searchParams }: { searchParams: SearchParams }) => {
  await connectDB();
  const pageSize = 10;
  const where = {};
  const orderBy = "createdAt";

  const page = parseInt(searchParams.page) || 1;
  const ticketCount = await Ticket.countDocuments(where);

  const tickets = await Ticket.find(where)
    .sort({ [orderBy]: -1 })
    .limit(pageSize)
    .skip((page - 1) * pageSize);

  return (
    <div>
      <Link
        href="/tickets/new"
        className={buttonVariants({ variant: "default" })}
      >
        New Tickets
      </Link>
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
