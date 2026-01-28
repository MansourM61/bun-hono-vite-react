import { defineConfig } from 'vitest/config';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    test: {
        include: [
            // to include all unit tests from `./test` folder
            './tests/**/*.test.?(c|m)[jt]s?(x)'],
    }
});