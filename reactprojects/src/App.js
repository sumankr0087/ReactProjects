import './App.css';
import Stopwatch from './components/Timer/Stopwatch';
import Showhide from './components/showHide/Showhide';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className="flex gap-4 bg-yellow-600 p-8">
      <Showhide />
      <Stopwatch />
      <TodoList />
    </div>
  );
}

export default App;