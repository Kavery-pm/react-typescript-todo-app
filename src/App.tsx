
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
     <Todos items={['Learn React','learn next']}/>
    </div>
  );
}

export default App;
