const avatar = "https://bit.ly/dan-abramov";

export const taskData: any = {
  id: "1",
  title: "tal title",
  assignee: { avatar, name: "tal", id: "1" },
  createdAt: new Date(1670226958394),
  status: "open",
  description: "description task",
  relatedTickets: [
    {
      id: "2",
      title: "First title",
      assignee: { avatar, name: "Tal", id: "1" },
      createdAt: new Date(1670226958394),
      status: "open",
      description: "description task2",
    },
    {
      id: "2",
      title: "Second title",
      assignee: { avatar, name: "Koby", id: "1" },
      createdAt: new Date(1670226958394),
      status: "in_progress",
      description: "description task2",
    },
  ],
};
