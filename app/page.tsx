'use client'

import { useEffect, useState } from 'react'

import { UserInfoForm } from '@/app/components/user-form'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

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

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_32%),linear-gradient(180deg,_rgba(15,23,42,1),_rgba(2,6,23,1))] px-6 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* 获取GitHub个人信息 */}
        <section className="flex items-start justify-center lg:justify-end">
          <UserInfoForm />
        </section>

        <section className="space-y-6">
          <Card className="border-white/10 bg-white/5 backdrop-blur">
            <CardHeader>
              <CardTitle>信息记录列表</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <span className="size-2 rounded-full bg-emerald-300" />
                {message ?? 'Loading API response...'}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
