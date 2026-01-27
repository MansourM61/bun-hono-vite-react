import { Hono } from 'hono'
import * as extra from "./routes/extra"

const app = new Hono()

app.get('/', (c) => {
    return c.text('Hono: landing page!')
})

app.get('/api', (c) => {
    return c.json({ id: 1, data: "Test" })
})

app.route("/extra", extra.default);

export default {
    port: 8080,
    fetch: app.fetch
}
