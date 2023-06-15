import React from 'react';
import styles from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { ToDoActions } from '../store/todo-slice';


const Todo = (props) => {
    const {id,title,description,status} = props;
    const dispatch = useDispatch();
    const markDoneHandler = ()=> {
        dispatch(ToDoActions.markAsDone(id))
    }

    const deleteHandler = ()=> {
        dispatch(ToDoActions.removeTodo(id))
    }
    return (
        <li className={[styles.todo,status === true?styles.done:''].join(" ")}>
            <div className={styles.titleWrapper}>
                <h6 className={styles.title}>{title}</h6>
                <div className={styles.actions}>
                   {!status &&  <button 
                        className={styles.markDone}
                        onClick={markDoneHandler}
                        >Mark as Done</button>}
                    <button 
                        className={styles.delete}
                        onClick={deleteHandler}
                        >Delete</button>
                </div>

            </div>
            <span className={styles.desc}>{description}</span>
        </li>
    )
}

export default Todo