import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/trapstreet.com/1.0.0/openapi.yaml',
  output: './src/trapstreet/routes.ts',
  docs: {
    output: './src/trapstreet/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
