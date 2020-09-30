import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props.task.id);
    }
    

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