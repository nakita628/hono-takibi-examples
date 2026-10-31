import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mailboxvalidator.com/validation/0.1/openapi.yaml',
  output: './src/mailboxvalidator-validation/routes.ts',
  docs: {
    output: './src/mailboxvalidator-validation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
