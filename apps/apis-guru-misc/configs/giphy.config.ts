import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/giphy.com/1.0/openapi.yaml',
  output: './src/giphy/routes.ts',
  docs: {
    output: './src/giphy/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
