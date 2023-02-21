import { Dancing_Script } from '@next/font/google'
import ResetTodos from './components/reset'
import TodoList from './components/Todo_List'

const Dancing = Dancing_Script({ subsets: ['latin'], style: "normal", weight: "700" })

export default function Home() {
  return (
    <>
      <div>
        <h1 className={`${Dancing.className}
        flex justify-center
         text-white sm:text-9xl text-8xl
          pt-8 mb-16`}>
          Todo App
        </h1>
        <div className="flex justify-center">
          {/* @ts-expect-error Server Component */}
          <TodoList />
        </div>
      </div>
      <ResetTodos />
    </>
  )
}
