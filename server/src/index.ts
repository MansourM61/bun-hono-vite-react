import { Hono } from 'hono'
import * as extra from "./routes/extra"
import * as api from "./apis/api";
import { serveStatic } from 'hono/bun';

const app = new Hono()

// If in `production`, use client built folder to serve the static files,
// This way, the landing page will directly summon the client.
if (process.env.MODE_ENV === "production") {
    app.use("/*", serveStatic({ root: "../client/dist" }))
    app.get('/about', (c) => {
        return c.text('Hono: landing page!')
    })
}
else {
    app.get('/', (c) => {
        return c.text('Hono: landing page!')
    })
}

// Add the routes, APIs, etc to the server
app.route("/extra", extra.default);
app.route("/api", api.default);

export default {
    port: 8080,
    fetch: app.fetch
}
