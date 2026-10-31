import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/dracoon.team/4.42.2/openapi.yaml',
  output: './src/dracoon-team/routes.ts',
  docs: {
    output: './src/dracoon-team/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
