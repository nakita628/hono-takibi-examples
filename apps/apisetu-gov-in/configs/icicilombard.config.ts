import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/icicilombard/3.0.0/openapi.yaml',
  output: './src/icicilombard/routes.ts',
  docs: {
    output: './src/icicilombard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
