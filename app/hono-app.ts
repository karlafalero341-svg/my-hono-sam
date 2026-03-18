import { Hono } from 'hono'

export const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!'
  })
})

app.get('/github/user', async (c) => {
  const token = c.req.query('token')?.trim()

  if (!token) {
    return c.json({ error: 'Missing token query parameter' }, 400)
  }

  const res = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': 'hono-homework'
    }
  })

  if (!res.ok) {
    return c.json({ error: 'GitHub request failed' }, 400)
  }

  return c.json(await res.json())
})


