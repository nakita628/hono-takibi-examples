import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictandaman/3.0.0/openapi.yaml',
  output: './src/edistrictandaman/routes.ts',
  docs: {
    output: './src/edistrictandaman/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
