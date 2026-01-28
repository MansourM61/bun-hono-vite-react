import { Hono } from 'hono'

const app = new Hono()

// All the routes are relative to the declared route in the main file
// (index.ts).
const route = app.get('/', (c) => {
    return c.json({ id: 1, data: "Test" })
})

export default app
export type ApiType = typeof route