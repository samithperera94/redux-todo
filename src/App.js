import './App.css';
import Layout from './layout/Layout';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import AddTodoBtn from './components/AddTodoBtn';
import { useSelector } from 'react-redux';

function App() {
  const isShown = useSelector((state)=>state.ui.isShown)
  return (
    <Layout>
      {!isShown && <AddTodoBtn/>}
      {isShown && <AddTodo/>}
      <Todos/>
    </Layout>
  );
}

export default App;
