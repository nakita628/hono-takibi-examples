import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/squareup.com/2.0/openapi.yaml',
  output: './src/squareup/routes.ts',
  docs: {
    output: './src/squareup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
