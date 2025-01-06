"use client"
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React from 'react'

export default function NotFound() {
    const router = useRouter()
  return (
    <div className='container-fluid bg-danger-subtle py-5 text-center' style={{height: '100vh'}}>
      <h1 className='text-danger display-1 fw-bold mb-3'>404 | Not Found</h1>
      <p className='mb-5'>Op's we couldn't find the resource you were looking for!, sorry!</p>

      <button onClick={() => router.back()} className='btn btn-sm bg-primary'>Go back to where you're coming from</button>
    </div>
  )
}
