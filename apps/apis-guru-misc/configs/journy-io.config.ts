import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/journy.io/1.0.0/openapi.yaml',
  output: './src/journy-io/routes.ts',
  docs: {
    output: './src/journy-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
