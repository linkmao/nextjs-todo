   import {prisma} from '@/libs/prisma'
   import TaskCard from './components/TaskCard'

const loadTask = async () =>{
// Hay dos enfoques para consultar los datos
//1. Accediendo a la api que ya habiamos creado
  // const res=  await fetch('http://localhost:3000/api/task')
  // const data = await res.json()
  // console.log(data)

//2. Obteniendo los datos directamente de la base de datos usando prisma  
  const tasks = await prisma.task.findMany()
  return tasks
    }

const landingPage = async ()=>{
const data = await loadTask()
console.log(data)
  return <section className='container mx-auto'>
    <div className='grid grid-cols-3 gap-3 mt-10'>
    {data.map((t)=>(<TaskCard task={t}  key={t.id} />))}
    </div>
      </section>
  
}

export default landingPage