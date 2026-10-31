import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ndhm.gov.in/ndhm-healthid/1.0/openapi.yaml',
  output: './src/ndhm-gov-in-ndhm-healthid/routes.ts',
  docs: {
    output: './src/ndhm-gov-in-ndhm-healthid/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
