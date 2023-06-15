import React,{useState} from 'react';
import styles from './AddTodo.module.css';
import { useDispatch } from 'react-redux';
import { ToDoActions } from '../store/todo-slice';
import { UIActions } from '../store/ui-slice';

const AddTodo = () => {
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();

    const dispatch = useDispatch()

    const onChangeTitle =(e)=>{
        setTitle(e.target.value)
    }
    const onChangeDesc =(e)=>{
        setDescription(e.target.value)
    }
    const onSubmitHandler = (e)=> {
        e.preventDefault()
        dispatch(ToDoActions.addTodo({
            title:title,
            description:description
        }));
        setTitle("");
        setDescription("");
        setTimeout(()=>{
            dispatch(UIActions.toggleShow());
        },500)
    }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
        <span className={styles.title}>Add ToDo</span>
        <label className={styles.label}>Title</label>
        <input 
            className={styles.input} 
            type='text' 
            placeholder='title ...'
            onChange={onChangeTitle}
        />
        <label className={styles.label}>Description</label>
        <input 
            className={styles.input} 
            type='text' 
            placeholder='desc ...'
            onChange={onChangeDesc}
        />
        <button className={styles.btn} type='submit'>Add</button>
    </form>
  )
}

export default AddTodo