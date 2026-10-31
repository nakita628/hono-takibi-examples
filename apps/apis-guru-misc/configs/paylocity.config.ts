import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/paylocity.com/2/openapi.yaml',
  output: './src/paylocity/routes.ts',
  docs: {
    output: './src/paylocity/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
