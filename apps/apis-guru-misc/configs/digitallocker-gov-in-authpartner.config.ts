import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/digitallocker.gov.in/authpartner/1.0.0/openapi.yaml',
  output: './src/digitallocker-gov-in-authpartner/routes.ts',
  docs: {
    output: './src/digitallocker-gov-in-authpartner/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
