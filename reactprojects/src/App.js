import './App.css';
import Stopwatch from './components/Timer/Stopwatch';
import Showhide from './components/showHide/Showhide';

function App() {
  return (
    <div className="flex gap-4 bg-yellow-600 p-8">
      <Showhide />
      <Stopwatch />
    </div>
  );
}

export default App;