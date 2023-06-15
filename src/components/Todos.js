import React from 'react';
import Todo from './Todo';
import styles from './Todos.module.css';
import { useSelector } from 'react-redux';


const Todos = () => {
    const todos = useSelector((state)=> state.todos.todoList)
  return (
    <ul className={styles.container}>
        {!todos && <p>Please add your ToDo</p>}
        {todos && todos.map((todo)=>{
            return <Todo 
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        status={todo.status}/>
        })}
    </ul>
  )
}

export default Todos