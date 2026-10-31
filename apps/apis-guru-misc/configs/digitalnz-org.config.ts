import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/digitalnz.org/3/openapi.yaml',
  output: './src/digitalnz-org/routes.ts',
  docs: {
    output: './src/digitalnz-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
