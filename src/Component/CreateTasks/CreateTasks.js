import React, { Component } from 'react';
import Task from './Task'

// let tasks = [{// id: new Date(),
//         title: 'title',
//         isDone: 'isDone'
// }]

class CreateTasks extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [
                {
                    title: 'learn JS',
                    // isDone: isDone,
                    id: new Date()
                },
                {
                    title: 'learn React',
                    // isDone: isDone,
                    id: new Date()
                },
            ]
        }
    }

    createTask(e) {
        this.setState({
            tasks: [...this.state.tasks, e.currentTarget.value]
        })
    }
            
    render () {
        return ( 
        <div className='wrapper'>
            <input type="text" placeholder='enter task'/>
            <div className='tasks' key={this.state.tasks.id}>
                {this.state.tasks.map((item) => {
                    return <Task task={this.state.tasks} key={this.state.tasks.id}/>
                })}
            </div>
        </div>
        )
    }
}

export default CreateTasks;