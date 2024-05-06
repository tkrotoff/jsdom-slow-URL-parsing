import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

function handler(i: number) {
  return http.get(`https://example.com/user${i}`, () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick'
    });
  });
}

// 500 handlers
const handlers = [...Array(500)].map((_, i) => handler(i));

export const server = setupServer(...handlers);
