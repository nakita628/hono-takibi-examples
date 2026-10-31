import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ndhm.gov.in/ndhm-gateway/0.5/openapi.yaml',
  output: './src/ndhm-gov-in-ndhm-gateway/routes.ts',
  docs: {
    output: './src/ndhm-gov-in-ndhm-gateway/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
