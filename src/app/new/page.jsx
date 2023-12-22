"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// En este formulario al inicio Fazt muestra como se puede tomar el dato sin necesidad del useEffect ni los estatados, pero como este formualrio se va usar tambien para editar entonces si hizo uso del useEffect, que creo yo debe ser la manera mas profesional de aborar esta situación

// El params viene solo si es llamado por task edit,

const NewPage = ({ params }) => {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (params.idTask) {
      fetch(`/api/task/${params.idTask}`).then((res) => res.json()).then((data) => {
        setTitle(data.title)
        setDescription(data.description)
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Ya no uso estas dos lineas por que se está usando el useState
    // const title = e.target.title.value
    // const description = e.target.description.value
    // console.log(title, description)

    if (params.idTask) {
      fetch(`/api/task/${params.idTask}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' }
      }
      )

    } else {
      const res = await fetch('/api/task', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json
      // console.log(data)
    }


    router.push('/')
    router.refresh() // Esto hace un refresco antes de mostrar
  }


  return <div className="flex h-screen justify-center items-center">
    <form action="" className="bg-slate-800 p-10 w-1/4"
      onSubmit={handleSubmit}>

      <label htmlFor="title"
        className="text-white text-sm font-bold">Título de la tarea</label>
      <input type="text"
        className="border border-gray-600 p-2 mb-4 w-full"
        id="title"
        placeholder="Título"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor="description"
        className="text-white text-sm font-bold">Descripcion de la tarea</label>
      <textarea rows="3"
        className="border border-gray-600 p-2 mb-4 w-full"
        id="description"
        placeholder="Describe tu tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="flex justify-between">
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-900 text-white rounded py-2 px-1 font-bold">Guarda</button>
      {
        params.idTask && (
          <button type="button"
           className="bg-red-700 hover:bg-red-300 text-white rounded py-2 px-1 font-bold"
           onClick={async ()=>{
            const res = await fetch(`/api/task/${params.idTask}`,{
              method:"DELETE"
            })
            const data=await res.json()
            router.push('/')
            router.refresh() // Esto hace un refresco antes de mostrar

           }}
           
           >
            Borra
          </button>
        )
      }

      </div>
    </form>


  </div>
}

export default NewPage
