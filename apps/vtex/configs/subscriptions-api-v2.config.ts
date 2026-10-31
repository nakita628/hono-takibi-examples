import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Subscriptions-API-(v2)/1.0/openapi.yaml',
  output: './src/subscriptions-api-v2/routes.ts',
  docs: {
    output: './src/subscriptions-api-v2/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
