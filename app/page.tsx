'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello')
      const { message } = await res.json()
      setMessage(message)
    }
    fetchData()
  }, [])

  if (!message) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <p className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
          Loading...
        </p>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/40">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Hono API</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{message}</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Tailwind CSS is installed and active in this Next.js app.
        </p>
      </div>
    </main>
  )
}
