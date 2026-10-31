import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/gujaratvidyapith/3.0.0/openapi.yaml',
  output: './src/gujaratvidyapith/routes.ts',
  docs: {
    output: './src/gujaratvidyapith/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
