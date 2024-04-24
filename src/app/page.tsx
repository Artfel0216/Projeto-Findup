import { Check, Import, Sun } from "lucide-react";



export default function Home() {
return (

<div>

{/* primeiro container */}
<div className="flex gap-60 h-[15rem] bg-gradient-to-l from-pink-500 to-purple-700 text-white font-bold text-4xl">
<p className=" ml-[25rem] mt-[4rem]">
    T O D O
</p>
<Sun className='w-[2.5rem] h-[3rem] mt-[3.5rem] cursor-pointer' />

<div className="bg-zinc-800 h-[3rem] w-[70vh] absolute mt-[8rem] ml-[26rem] rounded shadow-md text-zinc-500 flex items-center p-5 gap-3 text-xs font-bold">
<button className="w-[4vh] h-[4vh] rounded-full border border-gray-500"></button>
Create a new todo...
</div>


</div>





{/* segundo container container */}

<div className="bg-zinc-800 w-[70vh] h-[57vh] absolute bottom-[8vh] ml-[26rem] rounded shadow-md">

<div className="bg-zinc-800 h-[8vh] w-[70vh]rounded text-zinc-500 flex items-center p-5 gap-3 text-xs font-bold">

<button className="w-[1.5rem] h-[1.5rem] rounded-full border border-gray-500 bg-gradient-to-l from-pink-500 to-purple-700 text-white flex items-center justify-center">
<Check className=' w-[3vh]' />
</button>

Complete online JavaScript course
</div>

<div className="flex w-full h-[1px] bg-zinc-500/20"></div>

<div className="bg-zinc-800 h-[8vh] w-[70vh]rounded text-zinc-500 flex items-center p-5 gap-3 text-xs font-bold">

<button className="w-[1.5rem] h-[1.5rem] rounded-full border flex items-center justify-center">

</button>

Jog around the park 3x
</div>

<div className="flex w-full h-[1px] bg-zinc-500/20"></div>

<div className="bg-zinc-800 h-[8vh] w-[70vh]rounded text-zinc-500 flex items-center p-5 gap-3 text-xs font-bold">

<button className="w-[1.5rem] h-[1.5rem] rounded-full border border-gray-500  flex items-center justify-center">

</button>

10 minutes meditation
</div>

<div className="flex w-full h-[1px] bg-zinc-500/20"></div>

<div className="bg-zinc-800 h-[8vh] w-[70vh]rounded text-zinc-500 flex items-center p-5 gap-3 text-xs font-bold">

<button className="w-[1.5rem] h-[1.5rem] rounded-full border border-gray-500  flex items-center justify-center">

</button>

Read for 1 hour
</div>

<div className="flex w-full h-[1px] bg-zinc-500/20"></div>

<div className="bg-zinc-800 h-[8vh] w-[70vh]rounded text-zinc-500 flex items-center p-5 gap-3 text-xs font-bold">

<button className="w-[1.5rem] h-[1.5rem] rounded-full border border-gray-500  flex items-center justify-center">

</button>

Pick up groceries
</div>

<div className="flex w-full h-[1px] bg-zinc-500/20"></div>

<div className="bg-zinc-800 h-[8vh] w-[70vh]rounded text-zinc-500 flex items-center p-5 gap-3 text-xs font-bold">

<button className="w-[1.5rem] h-[1.5rem] rounded-full border border-gray-500  flex items-center justify-center">

</button>

Complete Todo App on Frontend Mentor
</div>

<div className="flex w-full h-[1px] bg-zinc-500/20"></div>

{/* textos no final do container 2 */}

<div className="flex items-center text-zinc-500 text-xs  p-3">
5 items left

<div className="ml-[2rem] text-zinc-500">

<span className="text-blue-500 cursor-pointer hover:text-blue-900">
    All
</span>

<span className="ml-[1rem] cursor-pointer hover:text-zinc-400">
    Active

</span>

<span className="ml-[1rem] cursor-pointer hover:text-zinc-400">
    Completed

</span>

<span className="ml-[4rem] cursor-pointer hover:text-zinc-400">
    Clear Completed

</span>

</div>

</div>







</div>

</div>












);
}
