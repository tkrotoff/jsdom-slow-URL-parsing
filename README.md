# jsdom-slow-URL-parsing

https://github.com/jsdom/jsdom/issues/3712

https://github.com/mswjs/msw/discussions/2141

[JSDOM/whatwg-url](https://github.com/jsdom/whatwg-url) is slow to parse URLs with long query string.

This repo is an example with 500 [MSW](https://github.com/mswjs/msw) handlers.

Results (MacBook Pro 16" M1, macOS 14.4.1, Node.js v20.12.1):

- Vitest `environment: 'node'`
  - JSDOM + MSW short URL: 23.951ms
  - JSDOM + MSW long URL: 27.046ms

- Vitest `environment: 'happy-dom'`
  - JSDOM + MSW short URL: 20.962ms
  - JSDOM + MSW long URL: 29.937ms

- Vitest `environment: 'jsdom'`
  - JSDOM + MSW short URL: 66.226ms
  - JSDOM + MSW long URL: **3.740s**

- Vitest `environment: 'jsdom'` + [whatwg-url patched](./patches/whatwg-url+14.0.0.patch)
  - JSDOM + MSW short URL: 34.554ms
  - JSDOM + MSW long URL: **126.326ms**
