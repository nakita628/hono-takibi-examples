import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/insvalsura/3.0.0/openapi.yaml',
  output: './src/insvalsura/routes.ts',
  docs: {
    output: './src/insvalsura/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
