import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/random-facts/1.5/openapi.yaml',
  output: './src/fungenerators-random-facts/routes.ts',
  docs: {
    output: './src/fungenerators-random-facts/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
