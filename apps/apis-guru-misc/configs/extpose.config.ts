import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/extpose.com/1.0.0/openapi.yaml',
  output: './src/extpose/routes.ts',
  docs: {
    output: './src/extpose/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
