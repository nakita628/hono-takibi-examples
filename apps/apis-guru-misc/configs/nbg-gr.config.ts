import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nbg.gr/v3.1.5/openapi.yaml',
  output: './src/nbg-gr/routes.ts',
  docs: {
    output: './src/nbg-gr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
