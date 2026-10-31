import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bhagavadgita.io/1.0/openapi.yaml',
  output: './src/bhagavadgita-io/routes.ts',
  docs: {
    output: './src/bhagavadgita-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
