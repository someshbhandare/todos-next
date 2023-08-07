import Todo from "@/models/TodoModel";
import connect from '@/config/ConnectDB';
import Link from 'next/link';
import TodoItem from '@/components/TodoItem';
import { useEffect, useState } from "react";

async function getTodos() {
  "use server"
  connect()
  return await Todo.find();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"
  connect()
  await Todo.findByIdAndUpdate(id, {complete})
}

export default async function Home() {
  const todos = await getTodos();
  // todos.map(todo=> console.log({...todo}));
  // console.log("hi")
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <Link href="/new" className='border border-slate-200 px-4 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>New</Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo._id} {...todo._doc} _id={todo._id.toString()} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}
