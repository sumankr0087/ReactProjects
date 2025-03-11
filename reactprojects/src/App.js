import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Stopwatch from './components/Timer/Stopwatch';
import Showhide from './components/showHide/Showhide';
import TodoList from './components/todoList/TodoList';
import SubmitFormData from './components/formData/submitFormData';


function App() {
  return (
    <div className="grid col-span-3 gap-4 bg-yellow-600 p-8">
      <Showhide />
      <Stopwatch />
      <TodoList />
      <ProgressBar />
      <SubmitFormData />
    </div>
  );
}

export default App;