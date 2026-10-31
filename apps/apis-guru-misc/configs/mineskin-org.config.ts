import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mineskin.org/1.0.0/openapi.yaml',
  output: './src/mineskin-org/routes.ts',
  docs: {
    output: './src/mineskin-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
