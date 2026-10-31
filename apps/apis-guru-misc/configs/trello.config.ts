import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/trello.com/1.0/openapi.yaml',
  output: './src/trello/routes.ts',
  docs: {
    output: './src/trello/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
