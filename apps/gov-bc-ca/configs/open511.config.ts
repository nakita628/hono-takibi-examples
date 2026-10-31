import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/open511/1.0.0/openapi.yaml',
  output: './src/open511/routes.ts',
  docs: {
    output: './src/open511/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
