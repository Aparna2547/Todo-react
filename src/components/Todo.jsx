import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoCss from "./TodoCss.css";
import CurrentDateTime from "./CurrentDateTime";
import ListTask from "./ListTask";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  // const addTask = (title) => {
  //   const newTask = [...tasks, { title }];
  //   setTasks(newTask);
  //   console.log("newTask");
  // };

  const addTask = (title) => {
    const newTask = [...tasks, { task: title, done: false }];
    setTasks(newTask);
    console.log(newTask);
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => {
      const newTask = [...prevTasks];
      console.log("Before removal:", newTask);
      newTask.splice(index, 1);
      console.log("After removal:", newTask);
      return newTask;
    });
  };

  const doneTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index].done = true;
      return newTasks;
    });
  };
  
  const editTask = (index, editedValue) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      if (newTasks[index]) {
        newTasks[index].task = editedValue;
      }
      return newTasks;
    });
  };
  



  const addItem = () => {
    addTask(value);
    setValue("");
  };


  
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <>
      <div className="container">
        <div className="todo-header">
          <h3 className="p-2">TODO list</h3>
        </div>
        <div className="todo-body">
          <CurrentDateTime />
          <div className="m-3">
            <div className="w-100 my-4">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="form-control"
                ref={nameRef}
              />
            </div>
            <div>
              <Button className="mx-1 bg-primary btn" onClick={addItem}>
                ADD
              </Button>
            </div>
          </div>
          <div className="list-task">
            {tasks.map((task, index) => {
              return (
                <ListTask
                  key={index}
                  index = {index}
                  task={task}
                  removeTask={() => removeTask(index)}
                  doneTask={() => doneTask(index)}
                  // editTask = {() => editTask(index)}
                  editTask={editTask}
                  setTasks = {setTasks}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
