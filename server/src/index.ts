import { Hono } from 'hono'
import * as extra from "./routes/extra"
import * as api from "./apis/api";

const app = new Hono()

app.get('/', (c) => {
    return c.text('Hono: landing page!')
})

app.route("/extra", extra.default);
app.route("/api", api.default);

export default {
    port: 8080,
    fetch: app.fetch
}
