"use client"
import { useRouter } from "next/navigation";

let condition = true
async function Reset(refresh: () => void) {
    await fetch('https://todo-api-t7yv.vercel.app/api/todo/reset', {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({})
    });
    refresh()
    condition = false
}

export default function ResetTodos() {
    const router = useRouter()
    if (condition) {
        Reset(router.refresh)
    }
    return (<></>)
}