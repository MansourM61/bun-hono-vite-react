import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// extract the port number from the ENV
const port = Number(process.env.PORT ?? "8080")

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    server: {
        // apply proxy so the requests for `/api` are automatically
        // redirected to `http://localhost:port`
        proxy: {
            '/api': {
                target: `http://localhost:${port}`,
                changeOrigin: true,
                secure: false
            }
        }
    }
})
