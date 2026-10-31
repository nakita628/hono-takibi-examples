import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/npsailu/3.0.0/openapi.yaml',
  output: './src/npsailu/routes.ts',
  docs: {
    output: './src/npsailu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
