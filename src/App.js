import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Layout>
      <AddTodo/>
      <Todos/>
    </Layout>
  );
}

export default App;
