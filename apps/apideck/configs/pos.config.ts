import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/pos/9.3.0/openapi.yaml',
  output: './src/pos/routes.ts',
  docs: {
    output: './src/pos/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
