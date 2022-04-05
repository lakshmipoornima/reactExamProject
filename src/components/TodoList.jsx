import React from 'react'
import { Todo } from './Todo'
import './TodoList.css'

export const TodoList = ({ todolist }) => {

    let todos=todolist.slice(0,50)
    
    return (
        <div className='maindiv'>
            <h3>Tasks</h3>
            <div className='row heading'>
                <div className='col-sm-6'>
                    userId
                </div>
                <div className='col-sm-4'>
                    Title
                </div>
            </div>
            {todos.map(todo => <Todo  todo={todo} completed={todo.completed} />)}
        </div>
    )
}
