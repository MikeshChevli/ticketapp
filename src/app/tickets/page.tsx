import ticketModel from "@/lib/model/ticketModel";
import React from "react";
import DataTable from "./DataTable";
import connectDB from "@/lib/db";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Tickets = async () => {
  await connectDB();
  const tickets = await ticketModel.find({});

  return (
    <div>
      <Link
        href="/tickets/new"
        className={buttonVariants({ variant: "default" })}
      >
        New Tickets
      </Link>
      <DataTable tickets={tickets} />
    </div>
  );
};

export default Tickets;
