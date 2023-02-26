import { Row, Col, Card } from "antd";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Board = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", content: "Task 1", status: "todo" },
    { id: "task-2", content: "Task 2", status: "todo" },
    { id: "task-3", content: "Task 3", status: "done" },
  ]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const newTasks = Array.from(tasks);
    const [removed] = newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, removed);

    setTasks(newTasks);
  };

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Row>
        <Col span={8}>
          <Droppable droppableId="todo">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {getTasksByStatus("todo").map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card title={task.content} bordered={false}>
                          {task.content}
                        </Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Col>
        <Col span={8}>
          <Droppable droppableId="in-progress">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {getTasksByStatus("in-progress").map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card title={task.content} bordered={false}>
                          {task.content}
                        </Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Col>
      </Row>
    </DragDropContext>
  );
};

export default Board;
