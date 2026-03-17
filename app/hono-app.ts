import { Hono } from 'hono'

export const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!'
  })
})

app.post('/github/user', async (c) => {
  const { token } = await c.req.json()

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
