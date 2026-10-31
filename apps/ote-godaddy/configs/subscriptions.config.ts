import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/subscriptions/1.0.0/openapi.yaml',
  output: './src/subscriptions/routes.ts',
  docs: {
    output: './src/subscriptions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
