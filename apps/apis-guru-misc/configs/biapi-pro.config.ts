import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/biapi.pro/2.0/openapi.yaml',
  output: './src/biapi-pro/routes.ts',
  docs: {
    output: './src/biapi-pro/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
