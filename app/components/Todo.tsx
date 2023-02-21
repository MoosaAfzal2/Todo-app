"use client";

import { useRouter } from "next/navigation";

async function DeleteTodo(id: string, refresh: () => void) {
    await fetch(`/api/todo/delete?id=${id}`, {
        method: "DELETE"
    });
    refresh()
}

export default function Todo({ todo }: { todo: { id: string, name: string, isDone: boolean } }) {
    const router = useRouter()
    return (
        <>
            <div className="flex flex-row group">
                <div className={`font-sans font-medium
                w-[19.5rem] h-8 bg-white rounded-sm mb-3 p-1 pl-2
                duration-500 transition ease-in-out
                shadow-lg text-base tracking-wide
                hover:shadow-[0_0_5px_3px_#6d28d9]
                `}>
                    {todo.name}
                </div>
                <button onClick={() => { DeleteTodo(todo.id, router.refresh) }}
                    className="bg-violet-600 mt-[-1px] ml-[7px] rounded-full
                duration-500 transition ease-in-out
                w-[2.1rem] h-[2.1rem] opacity-0 group-hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="100%" height="85%" viewBox="0 0 24 24" stroke-width="4" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
        </>
    )
}
