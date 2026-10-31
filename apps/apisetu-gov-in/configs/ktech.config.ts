import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ktech/3.0.0/openapi.yaml',
  output: './src/ktech/routes.ts',
  docs: {
    output: './src/ktech/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
