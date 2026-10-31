import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hpsbys/3.0.0/openapi.yaml',
  output: './src/hpsbys/routes.ts',
  docs: {
    output: './src/hpsbys/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
