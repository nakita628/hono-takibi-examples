import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/cdcgov.local/prime-data-hub/0.2.0-oas3/openapi.yaml',
  output: './src/cdcgov-prime-data-hub/routes.ts',
  docs: {
    output: './src/cdcgov-prime-data-hub/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
