import React from "react";
import { TaskPreviewItem } from "../TaskPreviewItem/TaskPreviewItem";
import { Task } from "../Task/Task";

export type TasksPreviewList = {
  relatedTickets: Task[];
};

export const TasksPreviewList = ({ relatedTickets }: TasksPreviewList) => {
  return (
    <>
      {relatedTickets.map(
        ({ id, title, assignee, createdAt, status }: Task, i: number) => (
          <TaskPreviewItem
            id={id}
            title={title}
            assignee={assignee}
            status={status}
            createdAt={createdAt}
            key={i}
          />
        )
      )}
    </>
  );
};
