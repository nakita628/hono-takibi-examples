import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aiimspatna/3.0.0/openapi.yaml',
  output: './src/aiimspatna/routes.ts',
  docs: {
    output: './src/aiimspatna/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
