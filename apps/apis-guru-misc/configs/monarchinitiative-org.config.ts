import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/monarchinitiative.org/1.1.14/openapi.yaml',
  output: './src/monarchinitiative-org/routes.ts',
  docs: {
    output: './src/monarchinitiative-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
