import React, { Component } from "react";
import Task from "./Task";
import ToDoListFooter from './ToDoListFooter'

import Checkbox from './Checkbox'
// let tasks = [{// id: new Date(),
//         title: 'title',
//         isDone: 'isDone'
// }]

class CreateTasks extends Component {
  constructor() {
    super();
    // this.newIndex = 2
    this.state = {
      tasks: [
        {
          title: "learn JS",
          isDone: false,
          id: Date.now(),
        },
      ],
      inputValue: "",
      filter: 'all'
      // newIndex: 2
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
    // console.log(taskId);
    const newTaskList = this.state.tasks.filter((task) => {
      return task.id !== taskId;
    });
    this.setState({
      tasks: newTaskList,
    });
  };

  updateTask = (task) => {
    // console.log('task', task);
    const newMainObject = [...this.state.tasks]

    newMainObject.forEach((t) => {
      // console.log('t.id', t.id, 'task.id', task.id);
      if (t.id === task.id) {
        // console.log('t.isDone', t.isDone, 'task.isDone', task.isDone);
        t.isDone = task.isDone
        return
      }

      this.setState({
        tasks: newMainObject
      })
    })
  };

  changeFilter(filterValue) {
    console.log(filterValue);
    this.setState({
      filter: filterValue
    })
  }

  clearCompleted() {
    this.setState({
      tasks: this.state.tasks.filter((t) => !t.isDone)
    })
  }

  getItems = (filterValue) => {
    const { tasks } = this.state
    if (filterValue === 'all') return tasks
    if (filterValue === 'active') {
      return tasks.filter(task => task.isDone === false)
    }
    if (filterValue === 'completed') {
      return tasks.filter(task => task.isDone === true)
    }
  }

  render() {
    const { filter } = this.state
    const tasks = this.getItems(filter)
    return (
      <div className="wrapper">
        <input
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
          filter={this.state.filter}
          onFilterChanged={this.changeFilter.bind(this)}
          clearCompleted={this.clearCompleted.bind(this)}
        />
      </div>
    );
  }
}

export default CreateTasks;
