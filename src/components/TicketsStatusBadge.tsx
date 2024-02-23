import React from "react";
import { Badge } from "./ui/badge";

interface Props {
  status: "OPEN" | "STARTED" | "CLOSED";
}
const statusMap: Record<
  "OPEN" | "STARTED" | "CLOSED",
  { label: string; color: "bg-red-400" | "bg-blue-400" | "bg-green-400" }
> = {
  OPEN: { label: "Open", color: "bg-red-400" },
  CLOSED: { label: "Closed", color: "bg-green-400" },
  STARTED: { label: "Started", color: "bg-blue-400" },
};

const TicketsStatusBadge = ({ status }: Props) => {
  return (
    <Badge
      className={`${statusMap[status].color} text-background hover:${statusMap[status].color} cursor-pointer`}
    >
      {statusMap[status].label}
    </Badge>
  );
};

export default TicketsStatusBadge;
