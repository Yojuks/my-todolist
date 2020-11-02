import React, { Component } from "react";
import Task from "./Task";
import ToDoListFooter from './ToDoListFooter'
import { Input } from "antd";
import "antd/dist/antd.css";

class CreateTasks extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          title: "learn JS",
          isDone: false,
          id: Date.now(),
        },
      ],
      inputValue: "",
      // filter: 'all',
      filter: null
    };
  }

  createTask = (e) => {
    if (e.key === "Enter") {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { title: e.currentTarget.value, isDone: false, id: Date.now() },
        ],
        inputValue: "",
      });
    }
  };

  onChange = (e) => {
    this.setState({
      ...this.state.tasks,
      inputValue: e.currentTarget.value,
    });
  };

  deleteTask = (taskId) => {
    const newTaskList = this.state.tasks.filter((task) => {
      return task.id !== taskId;
    });
    this.setState({
      tasks: newTaskList,
    });
  };

  updateTask = (task) => {
    const newMainObject = [...this.state.tasks]

    newMainObject.forEach((t) => {
      if (t.id === task.id) {
        t.isDone = task.isDone
        return
      }

      this.setState({
        tasks: newMainObject
      })
    })
  };

  // changeFilter(filterValue) {
  //   console.log(filterValue);
  //   this.setState({
  //     filter: filterValue
  //   })
  // }
  changeFilter = (filterValue) => {
    console.log(filterValue);
    this.setState({
      filter: filterValue
    })
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((t) => !t.isDone)
    })
  }

  getItems = (filterValue) => {
    const { tasks } = this.state
    if (filterValue === null ) return tasks
    if (filterValue === true ) {
      return tasks.filter(task => task.isDone === false)
    }
    if (filterValue === false) {
      return tasks.filter(task => task.isDone === true)
    }
  }

  render() {
    const { filter } = this.state
    const tasks = this.getItems(filter)
    return (
      <div className="wrapper">
        <h1 >To Do List</h1>
        <Input 
          type="text"
          placeholder="Enter task"
          onChange={this.onChange}
          value={this.state.inputValue}
          onKeyPress={this.createTask}
        />
        <div className="tasks">
          {tasks.map((item) => {
            return (
              <div>
                <Task task={item}
                  key={item.id}
                  deleteTask={this.deleteTask}
                  updateTask={this.updateTask}
                />
              </div>
            );
          })}
        </div>
        <ToDoListFooter
          tasks={this.state.tasks}
          onFilterChanged={this.changeFilter}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default CreateTasks;
