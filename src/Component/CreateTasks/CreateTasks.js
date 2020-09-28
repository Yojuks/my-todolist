import React, { Component } from 'react';

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
                    // isDone: isDone
                },
                {
                    title: 'learn React',
                    // isDone: isDone
                },
            ]
        }
    }
            
    render () {
        return ( 
        <div className='wrapper'>
            <input type="text" placeholder='enter task'/>
            <div className='tasks'>
                {this.state.tasks.map((item) => {
                    return <div>
                                {item.title}    
                            </div>
                       
                    
                })}
            </div>
        </div>
        )
    }
}

export default CreateTasks;