import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ix-api.net/2.1.0/openapi.yaml',
  output: './src/ix-api-net/routes.ts',
  docs: {
    output: './src/ix-api-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
