import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.taskId)
    }
  })
  return NextResponse.json(task)
}

export async function PUT(request, { params }) {
  const info = await request.json()
  const taskUpdated = await prisma.task.update({
    where: { id: Number(params.taskId) },
    data: info
  })
  return NextResponse.json(taskUpdated)
}

export async function DELETE(request, { params }) {

  const taskDeleted = await prisma.task.delete({
    where: {
      id: Number(params.taskId)
    }
  })
  return NextResponse.json(taskDeleted)
}
