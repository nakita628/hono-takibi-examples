import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bunq.com/1.0/openapi.yaml',
  output: './src/bunq/routes.ts',
  docs: {
    output: './src/bunq/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
