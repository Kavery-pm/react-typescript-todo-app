
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
function App() {
  const todos =[
    new Todo('Learn Typescript'),
    new Todo('Learn React'),
    new Todo('Learn React with typescript')

  ]
  const addTodoHandler = ()=>{
    
  }
  return (
    <div className="App">
       <NewTodo onAddText={addTodoHandler}/>
     <Todos items={todos}/>
    
    </div>
  );
}

export default App;
