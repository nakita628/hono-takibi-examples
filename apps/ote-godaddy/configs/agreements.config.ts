import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/agreements/1.0.0/openapi.yaml',
  output: './src/agreements/routes.ts',
  docs: {
    output: './src/agreements/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
