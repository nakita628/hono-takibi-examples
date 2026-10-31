import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/commerce/2.1.0/openapi.yaml',
  output: './src/codat-io-commerce/routes.ts',
  docs: {
    output: './src/codat-io-commerce/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
