import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openbanking.org.uk/payment-initiation-openapi/3.1.7/openapi.yaml',
  output: './src/openbanking-org-uk-payment-initiation-openapi/routes.ts',
  docs: {
    output: './src/openbanking-org-uk-payment-initiation-openapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
