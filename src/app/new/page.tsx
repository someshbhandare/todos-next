import Todo from "@/models/TodoModel";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData){
    "use server"
    const title = data.get("title");
    if(typeof title !== "string" || title.length == 0){
        throw new Error("Invalid todo title")
    }
    await Todo.create({title});
    redirect("/");
}

export default async function NewPage() {
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">New</h1>
            </header>
            <form action={createTodo} className="flex flex-col gap-2">
                <input type="text" name="title" className="outline-none border-2 border-slate-300 text-black font-medium rounded px-2 py-1"/>
                <div className="flex gap-1 justify-end">
                    <Link href="/" className="border border-slate-200 px-4 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Cancel</Link>
                    <button type="submit" className="border border-slate-200 px-4 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Create</button>
                </div>
            </form>
        </>
    )
}