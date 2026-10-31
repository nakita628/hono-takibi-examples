import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/httpbin.org/0.9.2/openapi.yaml',
  output: './src/httpbin-org/routes.ts',
  docs: {
    output: './src/httpbin-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
