import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stackexchange.com/2.0/openapi.yaml',
  output: './src/stackexchange/routes.ts',
  docs: {
    output: './src/stackexchange/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
