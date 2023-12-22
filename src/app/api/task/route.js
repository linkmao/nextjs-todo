import { NextResponse } from "next/server";
import {prisma } from "@/libs/prisma";  // esta es la instancia de la clase que se ousó en la carperta libs

export async function  GET(){
  const tasks = await prisma.task.findMany()
  console.log (tasks)
  return NextResponse.json(tasks)
}

// Para obtener los datos que el front envia, se hace uso del request tal como se mustra a continuacion
export async function POST(request){
  const info= await request.json() // En info queda el json que el usuario ingresa
  //Aca es importante que cuando se crea la tarea se le debe enviar con la propiedad data
  const newTask= await prisma.task.create({data:{title:info.title, description:info.description}})
    console.log(info)
  return NextResponse.json(newTask)
}