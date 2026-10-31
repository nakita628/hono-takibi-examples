import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mailboxvalidator.com/disposable/1.0.0/openapi.yaml',
  output: './src/mailboxvalidator-disposable/routes.ts',
  docs: {
    output: './src/mailboxvalidator-disposable/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
