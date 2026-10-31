import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/tbse/3.0.0/openapi.yaml',
  output: './src/tbse/routes.ts',
  docs: {
    output: './src/tbse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
