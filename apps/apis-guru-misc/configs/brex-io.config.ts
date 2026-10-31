import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/brex.io/2021.12/openapi.yaml',
  output: './src/brex-io/routes.ts',
  docs: {
    output: './src/brex-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
