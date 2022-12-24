import React from "react";
import { TasksPreviewList } from "../TasksPreviewList/TasksPreviewList";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { TaskDetails } from "../TaskDetails/TaskDetails";
import { Status } from "../StatusBadge/StatusBadge";
import { User } from "../User/User";
import { TaskHeader } from "../TaskHeader/TaskHeader";

export type Task = {
  id: string;
  title: string;
  assignee: User | undefined;
  createdAt: Date;
  closedAt?: Date;
  status: Status;
  description: string;
  relatedTickets?: Task[];
};

export const Task = ({
  id,
  title,
  assignee,
  createdAt,
  closedAt,
  status,
  description,
  relatedTickets,
}: Task) => {
  return (
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
        <TaskHeader createdAt={createdAt} assignee={assignee} title={title} />
      </GridItem>
      <GridItem pl="2" area="nav">
        Nav
      </GridItem>
      <GridItem pl="2" area="main">
        <TaskDetails
          description={description}
          assignee={assignee}
          status={status}
          createdAt={createdAt}
        />
        {relatedTickets && (
          <Tabs size="md" variant="enclosed">
            <TabList>
              <Tab>Related Tasks</Tab>
            </TabList>
            <TabPanels>
              <TasksPreviewList relatedTickets={relatedTickets} />
            </TabPanels>
          </Tabs>
        )}
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};
