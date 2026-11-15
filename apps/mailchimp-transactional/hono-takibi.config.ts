import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Mailchimp Transactional API, official OpenAPI spec:
  // https://github.com/mailchimp/mailchimp-client-lib-codegen/blob/93f2cc719a314605947bd0642716f5e0a060cd55/spec/transactional.openapi.json
  input: 'https://raw.githubusercontent.com/mailchimp/mailchimp-client-lib-codegen/main/spec/transactional.openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://mandrillapp.com/api/1.4',
  },
})
