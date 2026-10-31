import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stream-io-api.com/v79.19.1/openapi.yaml',
  output: './src/stream-io-api/routes.ts',
  docs: {
    output: './src/stream-io-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
