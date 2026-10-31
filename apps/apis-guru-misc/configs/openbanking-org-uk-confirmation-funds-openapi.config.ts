import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openbanking.org.uk/confirmation-funds-openapi/3.1.7/openapi.yaml',
  output: './src/openbanking-org-uk-confirmation-funds-openapi/routes.ts',
  docs: {
    output: './src/openbanking-org-uk-confirmation-funds-openapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
