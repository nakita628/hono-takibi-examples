import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/bank-feeds/2.1.0/openapi.yaml',
  output: './src/codat-io-bank-feeds/routes.ts',
  docs: {
    output: './src/codat-io-bank-feeds/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
