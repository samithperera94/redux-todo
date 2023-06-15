import React from 'react';
import styles from './Todo.module.css';


const Todo = (props) => {
    const {id,title,description,status} = props;
    return (
        <li className={styles.todo}>
            <div className={styles.titleWrapper}>
                <h6 className={styles.title}>{title}</h6>
                <div className={styles.actions}>
                    <button 
                        className={styles.markDone}
                        
                        >Mark as Done</button>
                    <button 
                        className={styles.delete}
                        >Delete</button>
                </div>

            </div>
            <span className={styles.desc}>{description}</span>
        </li>
    )
}

export default Todo