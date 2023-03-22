const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Add a Todo:</label>
      <input type="text" id="todo" />
      <button>Add todo</button>
    </form>
  );
};
export default NewTodo;
