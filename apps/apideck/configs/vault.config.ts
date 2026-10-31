import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/vault/9.3.0/openapi.yaml',
  output: './src/vault/routes.ts',
  docs: {
    output: './src/vault/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
