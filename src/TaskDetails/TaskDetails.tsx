import React from "react";
import { Input, Select, Box } from "@chakra-ui/react";
import { Status } from "../StatusBadge/StatusBadge";

export type TaskDetails = {
  status: Status;
  createdAt: Date;
};

export const TaskDetails = ({ status, createdAt }: TaskDetails) => {
  return (
    <Box>
      <Select value={status} placeholder="Select option">
        <option value={"open"}>Open</option>
        <option value={"in_progress"}>In progress</option>
        <option value={"in_review"}>In review</option>
        <option value={"done"}>Done</option>
      </Select>
      <Input
        value={createdAt.toDateString()}
        placeholder="medium size"
        size="md"
      />
    </Box>
  );
};
