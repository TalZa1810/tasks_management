import React from "react";
import {
  HStack,
  VStack,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";

import { Status, StatusBadge } from "../StatusBadge/StatusBadge";
import { User } from "../User/User";

export type TaskDetails = {
  status: Status;
  createdAt: Date;
  assignee: User | undefined;
  description: string;
};

export const TaskDetails = ({
  status,
  createdAt,
  assignee,
  description,
}: TaskDetails) => {
  return (
    <Box
      style={{ padding: "20px" }}
      borderWidth="1px"
      borderRadius="lg"
      width="550px"
    >
      <VStack>
        <HStack spacing="24px">
          <Box>
            <FormControl>
              <FormLabel>Status:</FormLabel>
              <StatusBadge status={status} />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Date Created:</FormLabel>
              <Input
                isReadOnly
                value={createdAt.toDateString()}
                placeholder="medium size"
                size="md"
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Assignee</FormLabel>
              <Input
                isReadOnly
                value={assignee?.name ?? "Unassigned"}
                placeholder="medium size"
                size="md"
              />
            </FormControl>
          </Box>
        </HStack>
        <FormControl>
          <FormLabel>Description:</FormLabel>
          <Textarea isReadOnly value={description} />
        </FormControl>
      </VStack>
    </Box>
  );
};
