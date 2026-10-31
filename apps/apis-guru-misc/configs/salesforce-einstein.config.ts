import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/salesforce.local/einstein/2.0.1/openapi.yaml',
  output: './src/salesforce-einstein/routes.ts',
  docs: {
    output: './src/salesforce-einstein/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
