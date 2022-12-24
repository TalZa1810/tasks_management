import React from "react";
import { TasksPreviewList } from "../TasksPreviewList/TasksPreviewList";
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { TaskDetails } from "../TaskDetails/TaskDetails";
import { Status } from "../StatusBadge/StatusBadge";
import { UserProps } from "../User/UserProps";

export type Task = {
  id: string;
  title: string;
  assignee: UserProps | undefined;
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
      <TaskDetails assignee={assignee} status={status} createdAt={createdAt} />
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
