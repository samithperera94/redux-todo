import React from 'react';
import styles from './AddTodo.module.css';

const AddTodo = () => {
  return (
    <form className={styles.form}>
        <span className={styles.title}>Add ToDo</span>
        <label className={styles.label}>Title</label>
        <input className={styles.input} type='text' placeholder='title ...'/>
        <label className={styles.label}>Description</label>
        <input className={styles.input} type='text' placeholder='desc ...'/>
        <button className={styles.btn} type='submit'>Add</button>
    </form>
  )
}

export default AddTodo