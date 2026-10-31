import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/geomark/4.1.2/openapi.yaml',
  output: './src/geomark/routes.ts',
  docs: {
    output: './src/geomark/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
