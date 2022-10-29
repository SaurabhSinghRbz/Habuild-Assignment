import './App.css';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
