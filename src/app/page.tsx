"use client"
import { Check, Import, Sun } from "lucide-react";
import { Line } from "../components/line";


export default function Home() {
    const todos = [{
        title: "Complete online JavaScript Course 1",
        checked: true,
    },
    {
        title: "jog around the park 3",
        checked: true,
    },{
        title: "10 minutes meditation",
        checked: true,
    },{
        title: "read for 1 hour",
        checked: true,
    },{
        title: "Pick up groceries",
        checked: true,
    },{
        title: "Complete todo App on Frontend Mentor",
        checked: true,
    },{
        title: "llalalal 7",
        checked: true,
    }];
    
 
return (
    <div>

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
    todos.map((todo) => (
        <Line title={todo.title} checked={todo.checked} onClick={()=> {}} />
    ))
}











</div>

</div>












);
}
