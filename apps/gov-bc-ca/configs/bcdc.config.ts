import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/bcdc/3.0.1/openapi.yaml',
  output: './src/bcdc/routes.ts',
  docs: {
    output: './src/bcdc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
