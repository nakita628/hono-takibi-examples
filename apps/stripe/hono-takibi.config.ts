import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Stripe OpenAPI specification: https://github.com/stripe/openapi
  input: 'https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.stripe.com',
  },
})
