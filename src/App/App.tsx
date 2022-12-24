import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { Task } from "../Task/Task";
import { taskData } from "../data";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Task {...taskData} />
  </ChakraProvider>
);
