import type { Task } from "./Task/Task";

const avatar = "https://bit.ly/dan-abramov";

const talInfo = {
  avatar,
  name: "Tal",
  id: "51795ba8-8382-11ed-a1eb-0242ac120002",
};

export const taskData: Task = {
  id: "51795554-8382-11ed-a1eb-0242ac120002",
  title: "task title",
  assignee: talInfo,
  createdAt: new Date(Date.now()),
  status: "open",
  description: "description task",
  relatedTickets: [
    {
      id: "517957f2-8382-11ed-a1eb-0242ac120002",
      title: "related task title",
      assignee: talInfo,
      createdAt: new Date(1670226958394),
      status: "open",
      description: "Description related task",
    },
    {
      id: "51795928-8382-11ed-a1eb-0242ac120002",
      title: "Second related task title",
      assignee: undefined,
      createdAt: new Date(1670226958394),
      status: "in_progress",
      description: "Description related task",
    },
  ],
};

export const tasks: Task[] = [taskData];

export const getTaskData = (id: string) => tasks.find((task) => task.id === id);
