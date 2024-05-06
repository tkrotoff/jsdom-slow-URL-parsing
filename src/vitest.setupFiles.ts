import { afterAll, afterEach, beforeAll } from 'vitest';

import { server } from './msw-server';

// Mock Service Worker configuration: https://mswjs.io/docs/getting-started/integrate/node#using-manual-setup
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
