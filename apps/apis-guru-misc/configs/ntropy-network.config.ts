import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ntropy.network/1.0.0/openapi.yaml',
  output: './src/ntropy-network/routes.ts',
  docs: {
    output: './src/ntropy-network/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
