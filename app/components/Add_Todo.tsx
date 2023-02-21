"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function AddNewTodo(name: string, refresh: () => void) {
    await fetch('/api/todo/add', {
        method: "POST",
        body: JSON.stringify({ name })
    });
    refresh()
}

export default function AddTodo() {
    const router = useRouter()
    let [name, setname] = useState("")
    return (
        <>
            <input
                type="text" value={name} placeholder="Enter Task..."
                onChange={(e) => { setname(e.target.value) }}
                className="font-sans w-[22rem] h-9 font-semibold tracking-wide rounded-sm mb-4 p-1 pl-2 outline-none" />
            <button onClick={() => { AddNewTodo(name, router.refresh) }}
                className="self-center
                duration-1000 transition ease-in-out hover:shadow-[0_0_2px_2px_#6d28d9]
            text-white bg-violet-700
            font-semibold text-lg py-px
            w-[22rem] h-9 rounded-md">
                Add
            </button>
        </>
    )
}
