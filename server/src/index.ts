import { Hono } from 'hono'
import * as extra from "./routes/extra"
import * as api from "./apis/api";
import { serveStatic } from 'hono/bun';

const app = new Hono()

app.use("/*", serveStatic({ root: "../client/dist" }))

app.get('/about', (c) => {
    return c.text('Hono: landing page!')
})

app.route("/extra", extra.default);
app.route("/api", api.default);

export default {
    port: 3000,
    fetch: app.fetch
}
