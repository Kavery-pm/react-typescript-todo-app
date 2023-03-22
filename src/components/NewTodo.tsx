import {useRef} from 'react';
const NewTodo = () => {
   
    const todoInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInput.current!.value;
    console.log(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo" >Add a Todo:</label>
      <input type="text" id="todo" ref={todoInput}/>
      <button>Add todo</button>
    </form>
  );
};
export default NewTodo;
