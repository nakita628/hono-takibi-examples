import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Pricing-Hub/1.0/openapi.yaml',
  output: './src/pricing-hub/routes.ts',
  docs: {
    output: './src/pricing-hub/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
