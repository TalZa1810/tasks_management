import React from "react";
import { TasksPreviewList } from "../TasksPreviewList/TasksPreviewList";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { TaskDetails } from "../TaskDetails/TaskDetails";
import { Status } from "../StatusBadge/StatusBadge";

export type User = {
  name: string;
  id: string;
  avatar?: React.ReactNode;
};

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
    <>
      <TaskDetails status={status} createdAt={createdAt} />
      {relatedTickets && (
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Related Tasks</Tab>
          </TabList>
          <TabPanels>
            <TabPanels>
              <TasksPreviewList relatedTickets={relatedTickets} />
            </TabPanels>
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};
