import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mailboxvalidator.com/checker/1.0.0/openapi.yaml',
  output: './src/mailboxvalidator-checker/routes.ts',
  docs: {
    output: './src/mailboxvalidator-checker/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
