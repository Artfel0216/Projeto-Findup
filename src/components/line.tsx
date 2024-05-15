import React, { useState } from "react";
import { Check, Import, Sun } from "lucide-react";

export interface LineProps {
    index: number;
    title: string;
    checked: boolean;
    handleClick: (index: number) => void;
}

export const Line = (props: LineProps) => {

    
     

    console.log("Todo-list",props.checked);
    return (
        <div id="dado"  onClick={() => props.handleClick(props.index)} className=" cursor-pointer bg-zinc-800 h-[8vh] w-[70vh]rounded text-zinc-500 flex items-center p-5 gap-3 text-xs font-bold">
            {
                props.checked ? (
                    <button className="w-[1.5rem] h-[1.5rem] rounded-full border border-gray-500 bg-gradient-to-l from-pink-500 to-purple-700 text-white flex items-center justify-center">
                        <Check className=' w-[3vh]' />
                    </button>
                ) : (
                    <button  className="w-[1.5rem] h-[1.5rem] rounded-full border flex items-center justify-center">
                        
                    </button>
                )
            }
            
            {props.title}
            
        </div>
    )
}