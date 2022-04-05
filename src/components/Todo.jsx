import React from 'react'
import './Todo.css'

export const Todo = ({ todo, completed }) => {

    return (
        <div className='maindiv'>

            <div>
                <div className='row content'>
                    <div className='col-sm-6'>
                        {todo.id}
                    </div>
                    <div className='col-sm-4 title'>

                        <div className={` ${completed ? "completed" : ""}`}>
                            {todo.title}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
