import React from 'react';
import styles from './AddTodoBtn.module.css';
import { useDispatch } from 'react-redux';
import { UIActions } from '../store/ui-slice';

const AddTodoBtn = () => {
    const dispatch = useDispatch();

    const OnShowHandler = ()=> {
        dispatch(UIActions.toggleShow());
    }
  return (
    <button 
        onClick={OnShowHandler}
        className={styles.btn} 
        type='button'>
        Add Todos
    </button>
  )
}

export default AddTodoBtn