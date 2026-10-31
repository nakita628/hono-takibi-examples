import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ably.io/platform/1.1.0/openapi.yaml',
  output: './src/ably-io-platform/routes.ts',
  docs: {
    output: './src/ably-io-platform/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
