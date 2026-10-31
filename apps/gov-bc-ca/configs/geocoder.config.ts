import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/geocoder/2.0.0/openapi.yaml',
  output: './src/geocoder/routes.ts',
  docs: {
    output: './src/geocoder/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
