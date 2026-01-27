import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: [
            // to include all unit tests from `./test` folder
            './tests/**/*.test.?(c|m)[jt]s?(x)',
        ],
    },
})