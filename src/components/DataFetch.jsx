import React, { useEffect, useState } from 'react'
import axios from "axios"
import { TodoList } from './TodoList'



export const DataFetch = () => {
    let [dataarray, setDataArray] = useState([])

    const getTodos = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").
            then((response) => {
                console.log(response);
                setDataArray(response.data)
            })

    }
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            
            <div>
            {console.log(dataarray)}
                <TodoList todolist={dataarray} />
            </div>
        </div>
    )
}
