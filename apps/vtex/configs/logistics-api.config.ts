import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Logistics-API/1.0/openapi.yaml',
  output: './src/logistics-api/routes.ts',
  docs: {
    output: './src/logistics-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
