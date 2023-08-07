"use client";
type TodoItemProps = {
    _id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}

export default function TodoItem({_id, title, complete, toggleTodo}: TodoItemProps){
  return (
    <li className='flex gap-2 items-center'>
        <input type="checkbox" id={_id} className='cursor-pointer peer' defaultChecked={complete} onChange={(e)=> toggleTodo(_id, e.target.checked)} />
        <label htmlFor={_id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>
            {title}
        </label>
    </li>
  )
}
