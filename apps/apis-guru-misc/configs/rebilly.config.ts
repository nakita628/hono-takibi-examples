import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rebilly.com/2.1/openapi.yaml',
  output: './src/rebilly/routes.ts',
  docs: {
    output: './src/rebilly/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
