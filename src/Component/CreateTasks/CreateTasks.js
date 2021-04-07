import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import Task from './Task';
import ToDoListFooter from './ToDoListFooter';

export default function CreateTasks() {
  let [tasks, setTasks] = useState([]);
  const [currentInputValue, setCurrnetInputValue] = useState('');
  const [filter, setFilter] = useState(null);

  function onChange(event) {
    setCurrnetInputValue(event);
  }

  function createTask(e) {
    if (e.key === 'Enter') {
      setTasks(
        tasks.concat({
          id: Date.now(),
          completed: false,
          title: currentInputValue,
          active: false,
        }),
        setCurrnetInputValue('')
      );
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  function toggleSpan(id) {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }

  function onUpdateEnd(e, id, value) {
    if (e === 'Enter') {
      setTasks(
        tasks.map((item) => {
          if (item.id === id) {
            item.active = false;
            item.title = value;
          }
          return item;
        })
      );
    }
  }

  function setAct(id) {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          item.active = true;
        }
        return item;
      })
    );
  }

  function clearCompleted() {
    let newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  }

  function changeFilter(filterValue) {
    setFilter(filterValue);
  }

  function getItems(filterValue) {
    if (filterValue === null) return tasks;
    if (filterValue === true) {
      return tasks.filter((task) => task.completed === false);
    }
    if (filterValue === false) {
      return tasks.filter((task) => task.completed === true);
    }
  }

  tasks = getItems(filter);

  return (
    <div className="wrapper">
      <h1>To Do List</h1>
      <Input
        type="text"
        placeholder="Enter task"
        onChange={(e) => onChange(e.target.value)}
        value={currentInputValue}
        onKeyPress={(e) => createTask(e)}
      />

      {tasks.map((element) => {
        return (
          <Task
            task={element}
            key={element.id}
            deleteTask={deleteTask}
            toggleSpan={toggleSpan}
            onUpdateEnd={onUpdateEnd}
            setTasks={setTasks}
            setAct={setAct}
          />
        );
      })}

      <ToDoListFooter
        tasks={tasks}
        getItems={getItems}
        changeFilter={changeFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}
