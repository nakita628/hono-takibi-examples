import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/cpctmp/3.0.0/openapi.yaml',
  output: './src/cpctmp/routes.ts',
  docs: {
    output: './src/cpctmp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
