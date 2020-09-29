import React, {Component} from 'react';

class Task extends Component {
    // constructor(props) {
    //     super(props)
        
    // }

    render () {
        return (
                <div>
                    <div>{this.props.task.title}</div>
                </div>
        )
    }
}

export default Task;