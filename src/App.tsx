import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [todoItems, settodoItems] = useState<Todo[]>([]);

  const addTodoHandler = (todoItem: string) => {
    const newTodo = new Todo(todoItem);
    // settodoItems((existingTodo) => {
    //   return existingTodo.concat(newTodo);
    // });
    settodoItems([newTodo,...todoItems]);
  };
  return (
    <div className="App">
      <NewTodo onAddText={addTodoHandler} />
      <Todos items={todoItems} />
    </div>
  );
}

export default App;
