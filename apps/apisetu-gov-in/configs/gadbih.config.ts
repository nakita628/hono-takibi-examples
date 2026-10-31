import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/gadbih/3.0.0/openapi.yaml',
  output: './src/gadbih/routes.ts',
  docs: {
    output: './src/gadbih/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
