import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/barti/3.0.0/openapi.yaml',
  output: './src/barti/routes.ts',
  docs: {
    output: './src/barti/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
