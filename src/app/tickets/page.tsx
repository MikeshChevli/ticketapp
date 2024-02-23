import ticketModel from "@/lib/model/ticketModel";
import React from "react";
import DataTable from "./DataTable";
import connectDB from "@/lib/db";

const Tickets = async () => {
  await connectDB();
  const tickets = await ticketModel.find({});

  return (
    <div>
      <DataTable tickets={tickets} />
    </div>
  );
};

export default Tickets;
