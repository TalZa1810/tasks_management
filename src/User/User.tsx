import React from "react";
import { Text, Avatar } from "@chakra-ui/react";

export type User = {
  name: string;
  id: string;
  avatar?: string;
};

export const User = ({ avatar, name }: User) => {
  return (
    <>
      <Avatar size="xl" name="Dan Abrahmov" src={avatar} />
      <Text as="b" fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
        {name}
      </Text>
    </>
  );
};
