import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tfl.gov.uk/v1/openapi.yaml',
  output: './src/tfl-gov-uk/routes.ts',
  docs: {
    output: './src/tfl-gov-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
