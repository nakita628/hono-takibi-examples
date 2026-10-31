import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/cowin.gov.cin/cowincert/1.0.0/openapi.yaml',
  output: './src/cowin-gov-cin-cowincert/routes.ts',
  docs: {
    output: './src/cowin-gov-cin-cowincert/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
