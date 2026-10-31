import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rawg.io/v1.0/openapi.yaml',
  output: './src/rawg-io/routes.ts',
  docs: {
    output: './src/rawg-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
