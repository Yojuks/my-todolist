// import React, { Component } from "react";
// import { Button } from "antd";
// import "antd/dist/antd.css";

// class ToDoListFooter extends Component {

//   render() {
//     let {tasks} = this.props

//     return (
//       <div className="todolist-footer">
//         <div className="buttons">
//           <div>
//             <span className='items-left'>
//               {tasks.filter((t) => !t.isDone).length} items left
//             </span>
//           </div>
//           <Button
//             // className={filter.value === 'all' ? 'selected' : ""}
//             onClick={() => this.props.onFilterChanged(null)}
//             // data-value="all"
//           >
//             All
//           </Button>
//           <Button
//             // className={filter.value === 'active' ? 'selected' : ""}
//             onClick={() => this.props.onFilterChanged(true)}
//             // data-value="active"
//           >
//             Active
//           </Button>
//           <Button
//             // className={filter.value === 'completed' ? 'selected' : ""}
//             onClick={() => this.props.onFilterChanged(false)}
//             // data-value="completed"
//           >
//             Completed
//           </Button>
//           <div>
//             <span className='completed' onClick={this.props.clearCompleted}>Clear completed</span>
//         </div>
//         </div>

//       </div>
//     );
//   }
// }

// export default ToDoListFooter;
