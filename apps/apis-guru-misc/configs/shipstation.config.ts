import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shipstation.com/1.0.0/openapi.yaml',
  output: './src/shipstation/routes.ts',
  docs: {
    output: './src/shipstation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
