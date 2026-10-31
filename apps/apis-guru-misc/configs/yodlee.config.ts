import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/yodlee.com/1.1.0/openapi.yaml',
  output: './src/yodlee/routes.ts',
  docs: {
    output: './src/yodlee/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
