import React, {useState} from 'react'

function TodoList ({changeTodoList} : {changeTodoList: (value:string) => void}) {
    const [task, setTask] = useState(["arthur"])
    const [newTask, setNewTask] = useState ("")


    function handleInputChange (event: any) {
      setNewTask(event.target.value)
    }

    function addTask () {

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
        <div className="absolute flex items-center mt-[10rem]">

             <input type="text"
               placeholder='Digite sua tarefa'
                 value={newTask}
                  onChange={handleInputChange}
                  

                className=" p-[15px] rounded ml-[26rem] w-[22rem] text-zinc-50 h-[2rem] bg-zinc-800 border-none absolute" />

             <button id='dado' onClick={addTask} className=" rounded flex items-center justify-center h-[2rem] absolute ml-[49rem] border-2 border-none w-[2rem]  bg-zinc-800 text-zinc-50">+</button>
            </div>
           
    )
}

export default TodoList