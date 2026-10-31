import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ptv.vic.gov.au/v3/openapi.yaml',
  output: './src/ptv-vic-gov-au/routes.ts',
  docs: {
    output: './src/ptv-vic-gov-au/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
