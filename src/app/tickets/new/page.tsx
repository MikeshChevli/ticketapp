import dynamic from "next/dynamic";
import React from "react";

const TicketsForm = dynamic(() => import("@/components/TicketsForm"), {
  ssr: false,
});

const NewTickets = () => {
  return <TicketsForm />;
};

export default NewTickets;
