import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/twitter.com/current/2.61/openapi.yaml',
  output: './src/twitter-current/routes.ts',
  docs: {
    output: './src/twitter-current/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
