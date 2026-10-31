import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Marketplace-APIs-/1.0/openapi.yaml',
  output: './src/marketplace-apis-2/routes.ts',
  docs: {
    output: './src/marketplace-apis-2/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
