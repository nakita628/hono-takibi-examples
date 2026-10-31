import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/go-upc.com/1.0.0/openapi.yaml',
  output: './src/go-upc/routes.ts',
  docs: {
    output: './src/go-upc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
