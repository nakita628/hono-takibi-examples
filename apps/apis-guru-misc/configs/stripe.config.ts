import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stripe.com/2022-11-15/openapi.yaml',
  output: './src/stripe/routes.ts',
  docs: {
    output: './src/stripe/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
