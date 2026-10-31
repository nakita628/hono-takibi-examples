import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/sync-for-commerce/1.1/openapi.yaml',
  output: './src/codat-io-sync-for-commerce/routes.ts',
  docs: {
    output: './src/codat-io-sync-for-commerce/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
