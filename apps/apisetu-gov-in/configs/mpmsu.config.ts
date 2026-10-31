import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mpmsu/3.0.0/openapi.yaml',
  output: './src/mpmsu/routes.ts',
  docs: {
    output: './src/mpmsu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
