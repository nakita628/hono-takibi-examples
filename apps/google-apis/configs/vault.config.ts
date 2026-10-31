import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/vault/v1/openapi.yaml',
  output: './src/vault/routes.ts',
  docs: {
    output: './src/vault/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
