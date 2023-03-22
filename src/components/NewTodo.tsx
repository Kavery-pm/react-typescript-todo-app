import {useRef} from 'react';
import classes from './NewTodo.module.css';
const NewTodo:React.FC<{onAddText:(text:string)=>void}> = (props) => {
   
    const todoInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInput.current!.value;
    console.log(enteredText);
    props.onAddText(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo" >Add a Todo:</label>
      <input type="text" id="todo" ref={todoInput}/>
      <button>Add todo</button>
    </form>
  );
};
export default NewTodo;
