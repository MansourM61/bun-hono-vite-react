import { Hono } from 'hono'

const app = new Hono()

const route = app.get('/', (c) => {
    return c.json({ id: 1, data: "Test" })
})

export default app
export type ApiType = typeof route