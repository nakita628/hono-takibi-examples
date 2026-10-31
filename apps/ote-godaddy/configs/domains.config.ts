import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/domains/1.0.0/openapi.yaml',
  output: './src/domains/routes.ts',
  docs: {
    output: './src/domains/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
