"use client"
import React, { useState } from "react";
import { Check, Import, Sun } from "lucide-react";

export interface LineProps {
    title: string;
    checked: boolean;
    onClick: () => void;
}

export const Line = (props: LineProps) => {
    const [check, setCheck] = useState(props.checked)
    const handleClick = () => {
        setCheck(!check)
        props.onClick()
    }
    return (
        <div className="bg-zinc-800 h-[8vh] w-[70vh]rounded text-zinc-500 flex items-center p-5 gap-3 text-xs font-bold">
            {
                !props.checked ? (
                    <button onClick={handleClick} className="w-[1.5rem] h-[1.5rem] rounded-full border border-gray-500 bg-gradient-to-l from-pink-500 to-purple-700 text-white flex items-center justify-center">
                        <Check className=' w-[3vh]' />
                    </button>
                ) : (
                    <button className="w-[1.5rem] h-[1.5rem] rounded-full border flex items-center justify-center"></button>
                )
            }
            
            {props.title}
        </div>
    )
}