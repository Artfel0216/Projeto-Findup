"use client";
import { useState, useEffect } from "react";
import { Line } from "../components/line";
import TodoList from "@/components/TodoList";

export default function Home() {
  const [tasks, setTasks] = useState<{ checked: boolean; title: string }[]>(
    JSON.parse(localStorage.getItem("todo") || "[]")
  );
  const [newTask, setNewTask] = useState<{ checked: boolean; title: string }>();

  const handleClick = (index: number) => {
    const oldTodos = tasks;
    oldTodos[index].checked = !oldTodos[index].checked;
    const newTodos = [...oldTodos];

    setTasks(newTodos);
  };

  function handleInputChange(event: any) {
    console.log(event);
    setNewTask({ title: event.target.value, checked: false });
  }

  function addTask(e: any) {

      e.preventDefault("Enter tasks");

      if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask(undefined);

    }
}

function clearTasks(event: any) {
    setTasks([]);
}

  useEffect(() => {
    console.log(tasks);
    localStorage.setItem("todo", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <TodoList
        addTask={addTask}
        handleInputChange={handleInputChange}
        newTask={newTask}
        clearTask={clearTasks}
      />

      {/* primeiro container */}

      <div className="flex gap-60 h-[15rem] bg-gradient-to-l from-pink-500 to-purple-700 text-white font-bold text-4xl">
        <p className=" ml-[25rem] mt-[4rem]">T O D O</p>
      </div>

      {/* segundo container container */}

      <div className="bg-zinc-800 w-[70vh] h-[57vh] absolute bottom-[8vh] ml-[26rem] rounded shadow-md">
        {tasks.map((todo: any, index: number) => (
          <Line
            key={index}
            index={index}
            title={todo.title}
            checked={todo.checked}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
