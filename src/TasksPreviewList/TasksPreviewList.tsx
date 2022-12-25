import React from "react";
import { TaskPreviewItem } from "../TaskPreviewItem/TaskPreviewItem";
import { Task } from "../Task/Task";

export type TasksPreviewList = {
  tasks: Task[];
};

export const TasksPreviewList = ({ tasks }: TasksPreviewList) => {
  return (
    <>
      {tasks.map(({ id, title, assignee, createdAt, status }: Task) => (
        <TaskPreviewItem
          id={id}
          title={title}
          assignee={assignee}
          status={status}
          createdAt={createdAt}
          key={`task-${id}`}
        />
      ))}
    </>
  );
};
