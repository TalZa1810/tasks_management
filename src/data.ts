import type { Task } from "./Task/Task";
const avatar = "https://bit.ly/dan-abramov";

const talInfo = {
  avatar,
  name: "Tal",
  id: "51795ba8-8382-11ed-a1eb-0242ac120002",
};

export const taskData: Task = {
  id: "51795554-8382-11ed-a1eb-0242ac120002",
  title: "tal title",
  assignee: talInfo,
  createdAt: new Date(1670226958394),
  status: "open",
  description: "description task",
  relatedTickets: [
    {
      id: "517957f2-8382-11ed-a1eb-0242ac120002",
      title: "First title",
      assignee: talInfo,
      createdAt: new Date(1670226958394),
      status: "open",
      description: "description task2",
    },
    {
      id: "51795928-8382-11ed-a1eb-0242ac120002",
      title: "Second title",
      assignee: undefined,
      createdAt: new Date(1670226958394),
      status: "in_progress",
      description: "description task2",
    },
  ],
};
