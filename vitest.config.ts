import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // JSDOM + MSW short URL: 23.951ms
    // JSDOM + MSW long URL: 27.046ms
    //environment: 'node',

    // JSDOM + MSW short URL: 20.962ms
    // JSDOM + MSW long URL: 29.937ms
    //environment: 'happy-dom',

    // JSDOM + MSW short URL: 66.226ms
    // JSDOM + MSW long URL: 3.740s
    environment: 'jsdom',

    poolOptions: {
      threads: {
        singleThread: true
      }
    },

    // Will be run before each test file
    setupFiles: './src/vitest.setupFiles.ts'
  }
});
