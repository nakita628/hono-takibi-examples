import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ndhm.gov.in/ndhm-cm/0.5/openapi.yaml',
  output: './src/ndhm-gov-in-ndhm-cm/routes.ts',
  docs: {
    output: './src/ndhm-gov-in-ndhm-cm/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
