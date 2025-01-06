"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState();
  useEffect(() => {
    localStorage.setItem('COUNT', 0)
  }, [])
  
  return (
    <div className="text-center">
      <h1 className="dispaly-1 fw-bold text-primary">Prisma and Postgresql</h1>
      <h3 className="dispaly-1 fw-bold text-primary">Counter App in NextJS</h3>

      <p className="display-1 fw-bold text-primary">
        {count}
      </p>

      <div className="d-flex justify-content-around">
        <button onClick={() => setCount((prevCount) => prevCount + 1)} className="bg-primary fw-bold text-white btn btn-sm">
          + Increment
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)} className="bg-primary fw-bold text-white btn btn-sm">
          - Decrement
        </button>
      </div>
        <button onClick={() => setCount((prevCount) => prevCount = 0)} className="bg-danger mt-3 fw-bold text-white btn btn-sm">
          Reset ):
        </button>
    </div>
  );
}
