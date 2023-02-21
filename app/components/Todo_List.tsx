import AddTodo from "./Add_Todo";
import Todo from "./Todo";

async function GetTodos() {
    const res = await fetch(`/api/todo/list`);
    return res.json();
}

export default async function TodoList() {
    let { todos } = await GetTodos();
    return (
        <>
            <div className="flex justify-center flex-col">
                <h2 className="text-2xl mb-2 text-white">Add New Task</h2>
                <hr className="w-[22rem] h-[1px] mb-5 bg-white border-0"></hr>
                <AddTodo />
                <h2 className="text-2xl mb-2 mt-4 text-white">Tasks</h2>
                <hr className="w-[22rem] h-[1px] mb-5 bg-white border-0"></hr>
                <div>
                    {todos.map((Obj: { id: string, name: string, isDone: boolean }) => {
                        return (
                            <div key={Obj.id}>
                                <Todo todo={Obj} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
