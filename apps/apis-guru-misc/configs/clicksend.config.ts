import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clicksend.com/1.0.0/openapi.yaml',
  output: './src/clicksend/routes.ts',
  docs: {
    output: './src/clicksend/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
