import './App.css';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import { ToastProvider } from 'react-toast-notifications';
function App() {
  return (
    <div>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3000} placement="top-center">
        <Header />
        <div className='container'>
          <AddTodo />
          <TodoList />
        </div>
      </ToastProvider>
    </div>
  );
}

export default App;
