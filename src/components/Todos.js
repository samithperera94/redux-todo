import React from 'react';
import Todo from './Todo';
import styles from './Todos.module.css';

const DUMMY_TODOS = [
    {
        id:1,
        title:'clean room',
        description:'do like this',
        status:false
    },
    {
        id:2,
        title:'learn react',
        description:'follow course',
        status:false
    }
]

const Todos = () => {
  return (
    <ul className={styles.container}>
        {!DUMMY_TODOS && <p>Please add your ToDo</p>}
        {DUMMY_TODOS && DUMMY_TODOS.map((todo)=>{
            return <Todo 
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        status={todo.description}/>
        })}
    </ul>
  )
}

export default Todos