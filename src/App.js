import './App.css';
import Layout from './layout/Layout';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import AddTodoBtn from './components/AddTodoBtn';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateTodos,getTodos } from './store/todo-actions';

let isInitial =  true;
function App() {
  const isShown = useSelector((state)=>state.ui.isShown);
  const todos = useSelector(state => state.todos.todoList);
  const isModified = useSelector(state => state.todos.isModified);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(isInitial){
      isInitial =  false;
      return
    }
    if(isModified){
      dispatch(updateTodos(todos));

    }
  },[todos,dispatch]);

  useEffect(()=>{
    dispatch(getTodos());
  },[]);


  return (
    <Layout>
      {!isShown && <AddTodoBtn/>}
      {isShown && <AddTodo/>}
      <Todos/>
    </Layout>
  );
}

export default App;

// https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/