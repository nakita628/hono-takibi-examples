import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clever.com/1.2.0/openapi.yaml',
  output: './src/clever/routes.ts',
  docs: {
    output: './src/clever/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
