import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/pricing/2017-10-15/openapi.yaml',
  output: './src/pricing/routes.ts',
  docs: {
    output: './src/pricing/api.md',
    curl: true,
    baseUrl: 'https://pricing.us-east-1.amazonaws.com',
  },
})
