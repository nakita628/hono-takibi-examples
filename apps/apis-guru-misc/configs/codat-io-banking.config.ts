import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/banking/2.1.0/openapi.yaml',
  output: './src/codat-io-banking/routes.ts',
  docs: {
    output: './src/codat-io-banking/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
