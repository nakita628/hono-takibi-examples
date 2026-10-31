import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/acko/3.0.0/openapi.yaml',
  output: './src/acko/routes.ts',
  docs: {
    output: './src/acko/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
