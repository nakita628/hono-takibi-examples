import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/labourbih/3.0.0/openapi.yaml',
  output: './src/labourbih/routes.ts',
  docs: {
    output: './src/labourbih/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
