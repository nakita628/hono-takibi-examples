import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/customer-support/9.3.0/openapi.yaml',
  output: './src/customer-support/routes.ts',
  docs: {
    output: './src/customer-support/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
