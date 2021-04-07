import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

export default function ToDoListFooter({ tasks, changeFilter, clearCompleted }) {
  return (
    <div className="todolist-footer">
      <div className="buttons">
        <div>
          <span className="items-left">
            {tasks.filter((element) => !element.completed).length} items left
          </span>
        </div>
        <Button onClick={() => changeFilter(null)}>All</Button>
        <Button onClick={() => changeFilter(true)}>Active</Button>
        <Button onClick={() => changeFilter(false)}>Completed</Button>
        <div>
          <span className="completed" onClick={clearCompleted}>
            Clear completed
          </span>
        </div>
      </div>
    </div>
  );
}
