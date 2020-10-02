import React, {Component} from 'react';

class Task extends Component {
    render () {
        return (
            <div className='task'>
                <input type="checkbox"/>
                <div key={this.props.task.id}>{this.props.task.title}</div>
            </div>
        )
    }
}

export default Task;