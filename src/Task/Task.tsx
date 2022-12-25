import React from "react";
import { TasksPreviewList } from "../TasksPreviewList/TasksPreviewList";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
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
    <>
      <TaskHeader createdAt={createdAt} assignee={assignee} title={title} />
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
    </>
  );
};
