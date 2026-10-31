import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hsbte/3.0.0/openapi.yaml',
  output: './src/hsbte/routes.ts',
  docs: {
    output: './src/hsbte/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
