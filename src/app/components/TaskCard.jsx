"use client"
import { useRouter } from "next/navigation"

const TaskCard =({task})=>{
  const router = useRouter()
   return <div className='bg-slate-900 text-white hover:bg-slate-700 hover:cursor-pointer p-2'
   onClick={()=>{router.push(`/task/edit/${task.id}`)}}>
  <h3 className='font-bold text-2xl mb-2'>{task.title}</h3>
  <p>{task.description}</p>
  <p className="text-xs">{new Date(task.createdAt).toLocaleDateString()}</p>
</div>
}

export default TaskCard