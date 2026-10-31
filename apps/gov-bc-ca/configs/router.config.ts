import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/router/2.0.0/openapi.yaml',
  output: './src/router/routes.ts',
  docs: {
    output: './src/router/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
