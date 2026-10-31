import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/chitkarauniversity/3.0.0/openapi.yaml',
  output: './src/chitkarauniversity/routes.ts',
  docs: {
    output: './src/chitkarauniversity/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
