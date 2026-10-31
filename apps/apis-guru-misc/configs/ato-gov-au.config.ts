import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ato.gov.au/0.0.6/openapi.yaml',
  output: './src/ato-gov-au/routes.ts',
  docs: {
    output: './src/ato-gov-au/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
