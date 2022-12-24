import React from "react";
import { Box, IconButton, Stack, Text } from "@chakra-ui/react";
import "./styles.css";
import { Status } from "../StatusBadge/StatusBadge";
import { StatusBadge } from "../StatusBadge/StatusBadge";
import { BsChevronRight } from "react-icons/bs";
import { User } from "../User/User";

export type TaskPreviewProps = {
  id: string;
  title: string;
  assignee: User | undefined;
  createdAt: Date;
  status: Status;
};

export const TaskPreviewItem = ({
  id,
  title,
  assignee,
  createdAt,
  status,
}: TaskPreviewProps) => {
  return (
    <Box w="700px">
      <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize="2xl" fontWeight="semibold">
            {title}
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="column" alignItems="center">
            {assignee ? (
              <User {...assignee} />
            ) : (
              <div className="emptyAvatar" />
            )}
          </Stack>
          <Stack spacing="24px" direction="row" alignItems="center">
            <Text as="b">Creation date:</Text>
            <Text>{createdAt.toDateString()}</Text>
            <StatusBadge status={status} />
            <IconButton
              variant="ghost"
              colorScheme="teal"
              aria-label="display task"
              icon={<BsChevronRight />}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
