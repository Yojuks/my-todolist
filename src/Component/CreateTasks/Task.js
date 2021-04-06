import React, { useState, useEffect } from 'react';
import { Checkbox, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Title from 'antd/lib/skeleton/Title';

export default function Task({ task, deleteTask, toggleSpan }) {
  const [active, setActive] = useState(false);

  return (
    <div className="task">
      <div>
        <Checkbox type="checkbox" checked={task.completed} onChange={(e) => toggleSpan(task.id)} />
      </div>
      <div className="div-before-span">
        {active ? (
          <Input
            type="text"
            value={task.title}
            // disabled={true}
            checked={task.active}
            className={task.active ? 'task-input is-done' : 'task-input color-red'}
            // onBlur={(e) => {
            //   updateTask(
            //     {
            //       title: e.target.value,
            //     },
            //     task.id
            //   );
            // setActive({
            //   ...this.state,
            //   active: false,
            // });
            // }}
            // onPressEnter={(e) => {
            //   updateTask(
            //     {
            //       title: e.target.value,
            //     },
            //     task.id
            //   );
            // this.setState({
            //   ...this.state,
            //   active: false,
            // });
            // }}
            // onChange={(e) => {
            //   this.setState({
            //     ...this.state,
            //     title: e.target.value,
            //   });
            // }}
          />
        ) : (
          <span
            className={task.completed ? 'input-span is-done' : 'input-span'}
            onClick={() => {
              setActive({ active: true });
            }}
          >
            {task.title}
          </span>
        )}

        <span className="close" onClick={() => deleteTask(task.id)}>
          <DeleteOutlined color="red" />
        </span>
      </div>
    </div>
  );
}

// import React, { Component } from "react";
// import { Checkbox, Input } from "antd";
// import { DeleteOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";

// class Task extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false,
//       title: props.task.title
//     };
//     this.parentDeleteCallback = props.deleteTask;
//     this.parentUpdateCallback = props.updateTask;
//   }

//   deleteTask = () => {
//     this.parentDeleteCallback(this.props.task.id);
//   };

//   render() {
//     const { tasks, filter } = this.props;

//     let filteredTasks = [];
//     if (filter === "all") filteredTasks = tasks;
//     if (filter === "active")
//       filteredTasks = tasks.filter((task) => !task.isDone);
//     if (filter === "completed")
//       filteredTasks = tasks.filter((task) => task.isDone);

//     return (
//       <div className="task">
//         <div>
//           <Checkbox
//             type="checkbox"
//             defaultChecked={false}
//             checked={this.props.task.isDone}
//             onChange={(e) => {
//               this.props.updateTask({isDone: e.target.checked}, this.props.task.id)
//             }}
//           />
//         </div>
//         <div className='div-before-span'>
//           {this.state.active ? (
//             <Input
//               type="text"
//               value={ this.state.title }
//               // disabled={true}
//               checked={this.props.task.isDone}
//               className={
//                 this.props.task.isDone ? "task-input is-done" : "task-input color-red"
//             }
//             onBlur={(e) => {
//               this.props.updateTask({
//                 title: e.target.value
//               }, this.props.task.id)
//               this.setState({
//                 ...this.state,
//                 active: false
//               })
//             }}

//             onPressEnter={(e) => {
//               this.props.updateTask({
//                 title: e.target.value
//               }, this.props.task.id)
//               this.setState({
//                 ...this.state,
//                 active: false
//               })
//             }}
//             onChange={(e) => {
//               this.setState({
//                 ...this.state,
//                 title: e.target.value
//               })
//             }}
//           />
//           ) : (
//             <span className='input-span'
//               onClick={() => {
//                 this.setState({
//                   ...this.state,
//                   active: true
//                 })
//               }}
//             >
//               {
//                 this.props.task.title
//               }
//             </span>
//           )}

//           <span className="close" onClick={this.deleteTask}>
//             <DeleteOutlined color="red" />
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// export default Task;
