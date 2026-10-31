import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/lawcollegeandaman/3.0.0/openapi.yaml',
  output: './src/lawcollegeandaman/routes.ts',
  docs: {
    output: './src/lawcollegeandaman/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
