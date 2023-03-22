
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
function App() {
  const todos =[
    new Todo('Learn Typescript'),
    new Todo('Learn React'),
    new Todo('Learn React with typescript')

  ]
  return (
    <div className="App">
     <Todos items={todos}/>
    </div>
  );
}

export default App;
