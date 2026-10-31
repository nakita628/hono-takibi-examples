import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Marketplace-Protocol/1.0/openapi.yaml',
  output: './src/marketplace-protocol/routes.ts',
  docs: {
    output: './src/marketplace-protocol/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
