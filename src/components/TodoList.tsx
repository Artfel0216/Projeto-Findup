import React, {} from "react";
interface TodoListProps {
  handleInputChange: (event: any) => void;
  addTask: (event: any) => void;
  newTask: { title: string; checked: boolean } | undefined;
  clearTask: (event: any) => void;
}
function TodoList({
  addTask,
  handleInputChange,
  newTask,
  clearTask,
}: TodoListProps) {


  return (
    
    <form
      id="todo-form"
      className="absolute flex items-center mt-[10rem]"
      onSubmit={addTask}
      >
      <div className="flex items-center cursor-pointer">

      <input
        type="text"
        className=" p-[15px] rounded ml-[26rem] w-[22rem] text-zinc-50 h-[2rem] bg-zinc-800 border-none absolute"
        placeholder="Digite sua tarefa"
        value={newTask?.title ?? ""}
        onChange={handleInputChange}
       
      />


      <button
        id="dado"
        type="submit"
        className=" rounded flex items-center justify-center h-[2rem] absolute ml-[49rem] border-2 border-none w-[2rem]  bg-zinc-800 text-zinc-50"
        
      >
        +
      </button>

      <a 
      className=" cursor-pointer rounded flex items-center justify-center h-[2rem] absolute ml-[52rem] border-2 border-none w-[2rem]  bg-zinc-800 text-zinc-50"
      onClick={clearTask}
      >
        x
      </a>

      </div>
    </form>
  );
}

export default TodoList;
