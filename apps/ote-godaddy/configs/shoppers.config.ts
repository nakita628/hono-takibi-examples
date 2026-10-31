import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/shoppers/1.0.0/openapi.yaml',
  output: './src/shoppers/routes.ts',
  docs: {
    output: './src/shoppers/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
