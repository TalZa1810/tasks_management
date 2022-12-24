import React from "react";
import { Badge } from "@chakra-ui/react";

export type Status = "open" | "in_progress" | "in_review" | "done";

const colorsMap: Record<any, string> = {
  open: "gray",
  in_progress: "blue",
  in_review: "orange",
  done: "green",
};

export const StatusBadge = ({ status }: { status: Status }) => (
  <Badge colorScheme={colorsMap[status]}>{status}</Badge>
);
