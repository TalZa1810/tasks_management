import React from "react";
import {
  HStack,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Status, StatusBadge } from "../StatusBadge/StatusBadge";
import { UserProps } from "../User/UserProps";

export type TaskDetails = {
  status: Status;
  createdAt: Date;
  assignee: UserProps | undefined;
};

export const TaskDetails = ({ status, createdAt, assignee }: TaskDetails) => {
  return (
    <div>
      <HStack spacing="24px">
        <FormControl>
          <FormLabel>Status:</FormLabel>
          <StatusBadge status={status} />
        </FormControl>
        <FormControl>
          <FormLabel>Date Created</FormLabel>
          <Input
            isReadOnly
            value={createdAt.toDateString()}
            placeholder="medium size"
            size="md"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Assignee</FormLabel>
          <Input
            isReadOnly
            value={assignee?.name ?? "Unassigned"}
            placeholder="medium size"
            size="md"
          />
        </FormControl>
      </HStack>
      <div>
        <Textarea isReadOnly value="Here is a sample placeholder" />
      </div>
    </div>
  );
};
