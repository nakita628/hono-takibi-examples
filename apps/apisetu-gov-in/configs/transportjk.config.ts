import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportjk/3.0.0/openapi.yaml',
  output: './src/transportjk/routes.ts',
  docs: {
    output: './src/transportjk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
