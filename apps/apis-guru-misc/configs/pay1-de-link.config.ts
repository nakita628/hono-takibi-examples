import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pay1.de/link/v1/openapi.yaml',
  output: './src/pay1-de-link/routes.ts',
  docs: {
    output: './src/pay1-de-link/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
