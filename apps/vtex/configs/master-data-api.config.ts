import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Master-Data-API-/1.0/openapi.yaml',
  output: './src/master-data-api/routes.ts',
  docs: {
    output: './src/master-data-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
