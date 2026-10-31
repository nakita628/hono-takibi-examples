import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hpsssb/3.0.0/openapi.yaml',
  output: './src/hpsssb/routes.ts',
  docs: {
    output: './src/hpsssb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
