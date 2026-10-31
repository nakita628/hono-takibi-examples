import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/viator.com/1.0.0/openapi.yaml',
  output: './src/viator/routes.ts',
  docs: {
    output: './src/viator/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
