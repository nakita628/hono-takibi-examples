import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/goog.io/0.1.0/openapi.yaml',
  output: './src/goog-io/routes.ts',
  docs: {
    output: './src/goog-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
