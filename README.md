Author:Ajima Master
Date:2023/02/25
Objective:-
Create a Kanban board with drag-and-drop functionality using React. The board should be able to display cards representing tasks that can be moved between columns using drag-and-drop. The data can be static or hard coded; no backend is required.

------------------create component------------------------------------------------
create app
create-react-app my-app
use use state hook.
-----------------------------------install UI library------------------------------------
npm install --save react-dnd react-dnd-html5-backend

---------------------install NT Design to create card using row col---------------
npm install antd

Import the necessary Ant Design components and React DnD:
Create the board componen
Create a data folder inside src folder and create three files:
columns.js, tasks.js, and index.js. In columns.js, 
define an array of columns for your kanban board. 
Each column should have a unique id, title, and an array of taskIds (initially empty). 
In tasks.js, define an array of tasks that can be assigned to any of the columns. 
Each task should have a unique id, content, and a columnId property to indicate the column to which it belongs. 
In index.js, export both the columns and tasks arrays as an object.
Create a components folder inside src folder and create three files: 
Column.js, Task.js, and Board.js. In Column.js, define a functional component that renders a column of tasks. 
The component should take two props: column (an object representing the column) and tasks (an object representing all the tasks). 
Inside the component, map over the taskIds array of the column and render a Task component for each task that belongs to the column. 
In Task.js, define a functional component that renders a task card.
The component should take one prop: task (an object representing the task). Inside the component, render the content of the task.

In Board.js, define a class component that renders the entire kanban board. 
In the render method of the component, map over the columns array and render a Column component for each column. 
Wrap each Column component in a Droppable component from react-beautiful-dnd and pass the column.id as the droppableId prop. 
Inside each Column component, render a Draggable component for each task in the column. 
Pass the task.id as the draggableId prop, and the index of the task in the taskIds array as the index prop. Finally, pass the tasks object and the column object as props to each Column component.

In the onDragEnd method of the Board component, update the columns array based on the drag-and-drop action. 
Use the source and destination objects passed in the result parameter to update the taskIds array of the source and destination columns.

Style your kanban board using CSS or a CSS framework of your choice.



