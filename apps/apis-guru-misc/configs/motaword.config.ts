import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/motaword.com/1.0/openapi.yaml',
  output: './src/motaword/routes.ts',
  docs: {
    output: './src/motaword/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
