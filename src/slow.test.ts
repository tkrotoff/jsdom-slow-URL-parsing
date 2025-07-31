import { expect, test } from 'vitest';

// JSDOM + MSW short URL: 118.238ms
test('JSDOM + MSW short URL', async () => {
  console.time('JSDOM + MSW short URL');

  const response = await fetch('https://example.com/user499');

  console.timeEnd('JSDOM + MSW short URL');

  const json = await response.json();

  expect(json).toEqual({
    id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    firstName: 'John',
    lastName: 'Maverick'
  });
});

// JSDOM + MSW long URL: 2.331s
test('JSDOM + MSW long URL', async () => {
  const queryParams = 'x'.repeat(5000);

  console.time('JSDOM + MSW long URL');

  const response = await fetch(`https://example.com/user499?${queryParams}`);

  console.timeEnd('JSDOM + MSW long URL');

  const json = await response.json();

  expect(json).toEqual({
    id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    firstName: 'John',
    lastName: 'Maverick'
  });
});
