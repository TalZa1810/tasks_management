import * as React from "react";
import {
  ChakraProvider,
  theme,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";

import { Task } from "../Task/Task";
import { taskData } from "../data";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"130px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
    >
      <GridItem pl="6" area="header">
        <Heading as="h1" size="3xl">
          Task Management
        </Heading>
      </GridItem>
      <GridItem pl="2" area="nav">
        Nav
      </GridItem>
      <GridItem pl="2" area="main">
        <Task {...taskData} />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  </ChakraProvider>
);
