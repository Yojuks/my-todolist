import React, { Component } from 'react';
import Task from './Task'

// let tasks = [{// id: new Date(),
//         title: 'title',
//         isDone: 'isDone'
// }]

class CreateTasks extends Component {
    constructor() {
        super()
        this.newIndex = 2
        this.state = {
            tasks: [
                {   
                    title: 'learn JS',
                    // isDone: isDone,
                    id: 1
                },
                {
                    title: 'learn React',
                    // isDone: isDone,
                    id: 2
                },

            ],
            inputValue: ''
        }
    }

        createTask(e) {
            if (e.key === 'Enter') {
                this.setState({
                tasks: [...this.state.tasks, {title: e.currentTarget.value, isDone: false}],
                inputValue: ''
            })
        }
    }
    
    onChange = (e) => {
        this.setState({
            ...this.state.tasks,
            inputValue: e.currentTarget.value
        })
    }
            
    render () {
        return (
        <div className='wrapper'>
            <input type="text" placeholder='enter task' onChange={this.onChange} value={this.state.inputValue} onKeyPress={this.createTask.bind(this)}/>
            <div className='tasks' key={this.state.tasks.id}>
                { this.state.tasks.map((item) => {
                    return <Task task={item} key={item.id}/>
                })}
            </div>
        </div>
        )
    }
}

export default CreateTasks;