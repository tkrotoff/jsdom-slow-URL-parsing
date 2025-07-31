# jsdom-slow-URL-parsing

https://github.com/jsdom/jsdom/issues/3712

https://github.com/mswjs/msw/discussions/2141

[JSDOM/whatwg-url](https://github.com/jsdom/whatwg-url) is slow to parse URLs with long query string.

This repo is an example with 500 [MSW](https://github.com/mswjs/msw) handlers.

Results (MacBook Pro 14" M4 Pro, macOS 15.5, Node.js v22.17.1):

- Vitest `environment: 'node'`
  - JSDOM + MSW short URL: 99.363ms
  - JSDOM + MSW long URL: 94.716ms

- Vitest `environment: 'happy-dom'`
  - JSDOM + MSW short URL: 97.201ms
  - JSDOM + MSW long URL: 94.812ms

- Vitest `environment: 'jsdom'`
  - JSDOM + MSW short URL: 118.238ms
  - JSDOM + MSW long URL: **2.331s**

- Vitest `environment: 'jsdom'` + [whatwg-url patched](./patches/whatwg-url+14.2.0.patch)
  - JSDOM + MSW short URL: 102.898ms
  - JSDOM + MSW long URL: **130.679ms**
