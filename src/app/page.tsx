"use client"
import { useState } from "react"
import { Sun } from "lucide-react";
import { Line } from "../components/line";
import TodoList from "@/components/TodoList";


export default function Home() {


    
    const [name, setName] = useState<string>("Arthur")

    const [todos, setTodos] = useState<any>([]);

    const handleClick = (index: number) => { 
        const oldTodos = todos;
        oldTodos[index].checked = !oldTodos[index].checked;
        const newTodos = [...oldTodos];

        setTodos(newTodos);
    }

    const changeTodoList = (value: string) => {
        const oldTodos = todos;
        oldTodos.push({ title: value, checked: false });
        const newTodos = [...oldTodos];

        setTodos(newTodos);
    }

    return (
        <div>

           <TodoList changeTodoList={changeTodoList} />
        
        


            {/* primeiro container */}

            <div className="flex gap-60 h-[15rem] bg-gradient-to-l from-pink-500 to-purple-700 text-white font-bold text-4xl">
                <p className=" ml-[25rem] mt-[4rem]">
                    T O D O
                </p>
                
                <Sun onclick="newtask" className='w-[2.5rem] h-[3rem] mt-[3.5rem] cursor-pointer' />
            </div>

            {/* segundo container container */}

            <div className="bg-zinc-800 w-[70vh] h-[57vh] absolute bottom-[8vh] ml-[26rem] rounded shadow-md">
                {
                    todos.map((todo, index) => (
                        <Line 
                            key={index}
                            index={index}
                            title={todo.title} 
                            checked={todo.checked} 
                            handleClick={handleClick} 
                        />
                    ))
                }
            </div>
        </div>
    );
}
