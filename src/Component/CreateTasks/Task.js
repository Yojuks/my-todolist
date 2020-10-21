import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);

    this.parentDeleteCallback = props.deleteTask;
    this.parentUpdateCallback = props.updateTask;
  }

  deleteTask = () => {
    this.parentDeleteCallback(this.props.task.id);
  };
  
  updateTask = () => {
    // console.log(this.props.task.id); // тут співпадає 
    var task = {
        ...this.props.task
    }
    task.isDone = !task.isDone
    this.parentUpdateCallback(task);
  };

  render() {
    const {tasks, filter} = this.props
    
    let filteredTasks = []
    console.log(filteredTasks);
    if (filter === 'all') filteredTasks = tasks
    if (filter === 'active') filteredTasks = tasks.filter((task) => !task.isDone)
    if (filter === 'completed') filteredTasks = tasks.filter((task) => task.isDone)

    return (
      <div className="task">
        <input
          type="checkbox"
          defaultChecked={this.props.checked}
          onClick={this.updateTask}
        />
        <p>
          <input type="text" value={this.props.task.title}
            checked={this.props.task.isDone}
            className={this.props.task.isDone ? "task-input is-done " : "task-input "}
            onChange={(e) => {this.props.updateTask(e.target.value)}}
          />
          <span className="close" onClick={this.deleteTask}>
            x
          </span>
        </p>
      </div>
    );
  }
}

export default Task;
