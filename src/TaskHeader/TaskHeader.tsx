import React from "react";
import { Heading, Text, HStack, VStack, Avatar } from "@chakra-ui/react";
import { User } from "../User/User";

type TaskHeader = {
  title: string;
  assignee: User | undefined;
  createdAt: Date;
};
export const TaskHeader = ({ title, assignee, createdAt }: TaskHeader) => {
  return (
    <HStack>
      {assignee ? (
        <Avatar size="xl" name="Dan Abrahmov" src={assignee.avatar} />
      ) : (
        <div className="emptyAvatar" />
      )}
      <VStack>
        <Heading>{title}</Heading>
        <Text>{createdAt.toDateString()}</Text>
      </VStack>
    </HStack>
  );
};
