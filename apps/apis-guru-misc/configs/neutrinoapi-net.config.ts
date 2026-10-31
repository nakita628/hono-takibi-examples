import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/neutrinoapi.net/3.6.3/openapi.yaml',
  output: './src/neutrinoapi-net/routes.ts',
  docs: {
    output: './src/neutrinoapi-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
