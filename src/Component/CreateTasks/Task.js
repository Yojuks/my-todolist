import React, { useState, useEffect } from 'react';
import { Checkbox, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default function Task({ task, deleteTask, toggleSpan, onUpdateEnd, setAct }) {
  const [value, setValue] = useState(task.title);

  return (
    <div className="task">
      <div>
        <Checkbox type="checkbox" checked={task.completed} onChange={(e) => toggleSpan(task.id)} />
      </div>
      <div className="div-before-span">
        {task.active ? (
          <Input
            type="text"
            value={value}
            // disabled={true}
            checked={task.active}
            className="task-element"
            onKeyPress={(e) => onUpdateEnd(e.key, task.id, value)}
            onBlur={(e) => onUpdateEnd(e.key, task.id, value)}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <span
            className={task.completed ? 'input-span is-done' : 'input-span'}
            onClick={() => setAct(task.id)}
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
