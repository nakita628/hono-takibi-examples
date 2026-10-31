import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/datasette.local/v1/openapi.yaml',
  output: './src/datasette/routes.ts',
  docs: {
    output: './src/datasette/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
