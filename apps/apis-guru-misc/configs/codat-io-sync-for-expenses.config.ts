import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/sync-for-expenses/prealpha/openapi.yaml',
  output: './src/codat-io-sync-for-expenses/routes.ts',
  docs: {
    output: './src/codat-io-sync-for-expenses/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
