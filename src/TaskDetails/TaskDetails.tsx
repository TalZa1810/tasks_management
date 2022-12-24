import React from "react";
import { HStack, Input } from "@chakra-ui/react";
import { Status, StatusBadge } from "../StatusBadge/StatusBadge";

export type TaskDetails = {
  status: Status;
  createdAt: Date;
};

export const TaskDetails = ({ status, createdAt }: TaskDetails) => {
  return (
    <HStack spacing="24px">
      <StatusBadge status={status} />
      <div>
        <Input
          value={createdAt.toDateString()}
          placeholder="medium size"
          size="md"
        />
      </div>
    </HStack>
  );
};
