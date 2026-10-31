import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/qualtrics.com/0.2/openapi.yaml',
  output: './src/qualtrics/routes.ts',
  docs: {
    output: './src/qualtrics/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
