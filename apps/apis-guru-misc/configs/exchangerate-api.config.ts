import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/exchangerate-api.com/4/openapi.yaml',
  output: './src/exchangerate-api/routes.ts',
  docs: {
    output: './src/exchangerate-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
