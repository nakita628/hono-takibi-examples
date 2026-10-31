import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/webhook/9.3.0/openapi.yaml',
  output: './src/webhook/routes.ts',
  docs: {
    output: './src/webhook/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
