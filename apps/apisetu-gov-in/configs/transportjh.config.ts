import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportjh/3.0.0/openapi.yaml',
  output: './src/transportjh/routes.ts',
  docs: {
    output: './src/transportjh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
