import React from "react";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";

import { Status } from "../StatusBadge/StatusBadge";
import { StatusBadge } from "../StatusBadge/StatusBadge";

export type User = {
  name: string;
  id: string;
  avatar?: any;
};

export type TaskPreviewProps = {
  id: string;
  title: string;
  assignee?: User | undefined;
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
    <Box w="600px">
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
            {assignee?.avatar && (
              <Image
                borderRadius="full"
                boxSize="80px"
                src={assignee?.avatar}
                alt="Dan Abramov"
              />
            )}
            {assignee?.name && (
              <Text
                as="b"
                fontSize={{ base: "sm" }}
                textAlign={"left"}
                maxW={"4xl"}
              >
                {assignee?.name}
              </Text>
            )}
          </Stack>
          <Stack spacing="24px" direction="row" alignItems="center">
            <Text>{createdAt.toDateString()}</Text>
            <StatusBadge status={status} />
            <Button variant="outline" colorScheme="green">
              View task
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
