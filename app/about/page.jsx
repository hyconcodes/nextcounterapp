import { PrismaClient } from '@prisma/client'
import React from 'react'

export default async function home() {
  const prisma = new PrismaClient()
  const todos = await prisma.todo.findMany()
  return (
    <div className='container text-center'>
      <h1 className='display-5 fw-bold text-primary mb-4'>
        NextToDo with Nextjs, Prisma, Postgres, and Supabase
      </h1>

      <ul className='list-group'>
        {todos.map((todo) => (
          <li key={todo.id} className='list-group-item d-flex justify-content-between align-items-center'>
            <span>{todo.title}</span>
            <span className='badge bg-secondary'>{todo.id}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
