import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // JSDOM + MSW short URL: 99.363ms
    // JSDOM + MSW long URL: 94.716ms
    //environment: 'node',

    // JSDOM + MSW short URL: 97.201ms
    // JSDOM + MSW long URL: 94.812ms
    //environment: 'happy-dom',

    // JSDOM + MSW short URL: 118.238ms
    // JSDOM + MSW long URL: 2.331s
    environment: 'jsdom',

    poolOptions: {
      threads: {
        singleThread: true
      }
    },

    // Will be run before each test file
    setupFiles: './src/vitest.setupFiles.ts',
  }
});
