import { Input } from 'postcss'
import input from 'postcss/lib/input'
import React, {useState} from 'react'

function TodoList ({changeTodoList} : {changeTodoList: (value:string) => void}) {
    const [task, setTask] = useState(["arthur"])
    const [newTask, setNewTask] = useState ("")
  
   


     

    function handleInputChange (event: any) {
      setNewTask(event.target.value)
    }

    function addTask (e:any) {
      e.preventDefault("Enter task")

      if (newTask.trim() !== "") {
        changeTodoList(newTask)
      }

      localStorage.setItem(newTask, "task")
      
    }

    function salvar(newTask: string) {
        localStorage.info = document.getElementById ("dado")
      }
    

    function deleteTask (index :number) {

    }

 


    return (
      
              <form id='todo-form' className="absolute flex items-center mt-[10rem]" 
              onSubmit={addTask}>

              <input id="todo-input" type="text" className=" p-[15px] rounded ml-[26rem] w-[22rem] text-zinc-50 h-[2rem] bg-zinc-800 border-none absolute"
               
               placeholder='Digite sua tarefa'
               value={newTask}
               onChange={handleInputChange}
               />

                <button id='dado' className=" rounded flex items-center justify-center h-[2rem] absolute ml-[49rem] border-2 border-none w-[2rem]  bg-zinc-800 text-zinc-50">
                  +
                </button>

               </form>
           
    )
}

export default TodoList