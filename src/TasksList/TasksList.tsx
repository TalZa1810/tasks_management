import React from "react";
import { TasksPreviewList } from "../TasksPreviewList/TasksPreviewList";
import {
  Heading,
  Button,
  VStack,
  HStack,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
  ModalContent,
} from "@chakra-ui/react";
import { Task } from "../Task/Task";

export type TasksList = {
  tasks: Task[];
};

export const TasksList = ({ tasks }: TasksList) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack spacing={4}>
      <HStack spacing={8}>
        <Heading>Tasks</Heading>
        <Button onClick={onOpen}>New Task</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>text</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>
      <TasksPreviewList tasks={tasks} />
    </VStack>
  );
};
